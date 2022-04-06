require('dotenv').config({ path: 'env/.env' })

const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const restaurantRouter = require('./src/handlers/restaurant-handler')

app.use(bodyparser.json())

app.use('/restaurant', restaurantRouter)

app.get('/', (req, res) => {
    res.send('Restaurant app manager application')
})

app.listen(process.env.PORT, () => {
    console.log(`[app] server listening on port ${process.env.PORT}`)
})