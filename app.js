require('dotenv').config({ path: 'env/.env' })

const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const restaurantRouter = require('./src/handlers/restaurant-handler')
const batchRouter = require('./src/handlers/batch-handler')

app.use(bodyparser.json())

app.use('/restaurant', restaurantRouter)

app.use('/batch', batchRouter)

app.get('/', (req, res) => {
    res.send('Restaurant app manager application')
})

app.listen(process.env.PORT, () => {
    console.log(`[app] server listening on port ${process.env.PORT}`)
})