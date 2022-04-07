const RestaurantValidation = require('../validations/restaurant-validation')

const router = require('express').Router()

router.post('/', async (req, res) => {
    const restaurant = await RestaurantValidation.restaurantInsert(req.body)
    
    res.status(200).json(restaurant)
})

router.get('/', async (req, res) => {
    res.status(200).json({test: 'working'})
})

router.patch('/', async (req, res) => {
    res.status(200).json({test: 'working'})
})

router.delete('/', async (req, res) => {
    res.status(200).json({test: 'working'})
})

module.exports = router