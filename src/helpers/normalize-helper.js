const { DB_MONGO_HOST, DB_MONGO_USER, DB_MONGO_PASSWORD, DB_MONGO_SRV, DB_MONGO_REPLICASET, DB_MONGO_RESTAURANTS_COLLECTION } = process.env

class NormalizeHelper {
    static getMongoCredentials() {
        return {
            host: `${DB_MONGO_HOST}/${DB_MONGO_RESTAURANTS_COLLECTION}`,
            user: DB_MONGO_USER,
            password: DB_MONGO_PASSWORD,
            srv: DB_MONGO_SRV,
            replicaset: DB_MONGO_REPLICASET
        }
    }

    static booleanFromString(string) {
        return string === 'true' || string === '1'
    }
}

module.exports = NormalizeHelper