import dns from "dns"
import { MongoClient, type Db } from "mongodb"

// Some networks (certain routers, ISPs, VPNs, or Windows DNS configs) fail to
// resolve the special SRV DNS record that "mongodb+srv://" connection strings
// rely on, causing "querySrv ECONNREFUSED". Pointing Node's resolver at
// public DNS servers fixes this without requiring any OS-level network
// changes. This only affects this Node process's DNS lookups, not the user's
// system settings.
dns.setServers(["8.8.8.8", "1.1.1.1", "8.8.4.4"])

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB || "evolbiz"

if (!uri) {
  throw new Error(
    "Missing MONGODB_URI environment variable. Add it to .env.local — see .env.local.example."
  )
}

// In development, Next.js hot-reloads modules, which would otherwise create a
// new MongoClient (and a new connection) on every file save. We cache the
// client on the global object so it survives hot reloads. In production this
// module is only evaluated once per server instance, so a module-level
// variable would work too, but the global cache is safe in both cases.
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let clientPromise: Promise<MongoClient>

const client = new MongoClient(uri)

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  clientPromise = client.connect()
}

export async function getDb(): Promise<Db> {
  const connectedClient = await clientPromise
  return connectedClient.db(dbName)
}

export default clientPromise
