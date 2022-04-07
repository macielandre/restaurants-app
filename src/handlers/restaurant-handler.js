const RestaurantValidation = require('../validations/restaurant-validation')

const router = require('express').Router()

router.post('/', async (req, res) => {
    try{
        const restaurant = await RestaurantValidation.restaurantInsert(req.body)

        res.status(200).json({ message: 'restaurant created in database', restaurant})
    } catch(err) {
        res.status(err?.status || 500).json({ message: err.message || 'unexpected error' })
    }
    
})

router.get('/', async (req, res) => {
    const restaurantKeys = await RestaurantValidation.restaurantList(req.query)

    res.status(200).json({ test: 'working' })
})

router.patch('/', async (req, res) => {
    res.status(200).json({ test: 'working' })
})

router.delete('/', async (req, res) => {
    res.status(200).json({ test: 'working' })
})

module.exports = router