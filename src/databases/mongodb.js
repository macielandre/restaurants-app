const mongoose = require('mongoose')
const NormalizeHelper = require('../helpers/normalize-helper')

let connection = {}

process.on('exit', () => {
    mongoose.disconnect()
})

class MongoDB {
    static getOrCreateConnection(credentials) {
        const { host } = credentials

        if (!connection[host]) {
            connection[host] = MongoDB.createConnection(credentials)
            MongoDB.startEvents(credentials)
        }

        return connection[host]
    }

    static createConnection(credentials) {
        const { user, password, host, replicaset, srv } = credentials

        const options = {
            serverSelectionTimeoutMS: 15000,
            socketTimeoutMS: 20000,
            connectTimeoutMS: 15000,
            maxPoolSize: 1,
            minPoolSize: 1,
            family: 4
        }

        const useSRV = NormalizeHelper.booleanFromString(srv)
        
        let mongoUri = useSRV ? 'mongodb+srv://' : 'mongodb://'

        if (user && password) mongoUri += `${user}:${encodeURIComponent(password)}@`

        mongoUri += host

        if (replicaset) mongoUri += replicaset

        return mongoose.createConnection(mongoUri, options)
    }

    static startEvents(credentials) {
        const { host } = credentials

        connection[host].on('error', error => {
            console.error(`error in mongodb connection: ${error}`)
            mongoose.disconnect()
        })

        connection[host].on('disconnected', () => {
            console.log('mongodb disconnected')
            connection[host] = MongoDB.createConnection(credentials)
        })

        connection[host].on('connected', () => console.log('mongodb connected'))
        connection[host].on('reconnected', () => console.log('mongodb reconnected'))
        connection[host].on('reconnectFailed', () => console.log('mongodb reconnect failed'))
        connection[host].on('close', () => console.log('mongodb close'))
    }
}

module.exports = MongoDB
