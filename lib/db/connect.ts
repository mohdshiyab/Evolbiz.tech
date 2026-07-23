import dns from "dns"
import mongoose from "mongoose"

// Some networks (certain routers, ISPs, VPNs, or Windows DNS configs) fail to
// resolve the special SRV DNS record that "mongodb+srv://" connection strings
// rely on, causing "querySrv ECONNREFUSED". Pointing Node's resolver at
// public DNS servers fixes this without requiring any OS-level network
// changes. This only affects this Node process's DNS lookups, not the user's
// system settings.
dns.setServers(["8.8.8.8", "1.1.1.1", "8.8.4.4"])

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB || "evolbiz"

if (!MONGODB_URI) {
  throw new Error(
    "Missing MONGODB_URI environment variable. Add it to .env.local — see .env.local.example."
  )
}

type MongooseCache = {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

// Next.js hot-reloads modules in development, which would otherwise open a
// new connection on every file save/request. Caching the connection on the
// global object lets it survive hot reloads. In production this module is
// only evaluated once per server instance, so this is a no-op safeguard.
declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: MongooseCache | undefined
}

const cache: MongooseCache = global._mongooseCache ?? { conn: null, promise: null }
global._mongooseCache = cache

/**
 * Connects to MongoDB via Mongoose, reusing a cached connection across
 * hot-reloads and repeated invocations (important for serverless/Next.js
 * API routes, which can be re-invoked frequently).
 */
export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cache.conn) {
    return cache.conn
  }

  if (!cache.promise) {
    cache.promise = mongoose
      .connect(MONGODB_URI as string, {
        dbName: MONGODB_DB,
        bufferCommands: false,
      })
      .then((m) => m)
  }

  try {
    cache.conn = await cache.promise
  } catch (err) {
    // Reset the cached promise on failure so the next call retries the
    // connection instead of forever awaiting a rejected promise.
    cache.promise = null
    throw err
  }

  return cache.conn
}

export default connectToDatabase
