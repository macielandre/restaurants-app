var amqp = require('amqplib/callback_api')

class RabbitMQ {
    static async sendToQueue(message) {
        const queue = 'restaurants'

        amqp.connect(process.env.RABBIT_HOST, async (error0, conn) => {
            if (error0) throw error0

            conn.createChannel((error1, channel) => {
                if (error1) throw error1

                const bufferedMessage = Buffer.from(JSON.stringify(message))
                
                channel.assertQueue(queue, { durable: false })

                channel.sendToQueue(queue, bufferedMessage)

                console.log('[rabbit] message sent')
            })
        })
    }
}

module.exports = RabbitMQ