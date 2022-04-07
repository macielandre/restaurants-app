const RestaurantValidation = require('../validations/restaurant-validation')

const router = require('express').Router()

const defaultError = 'unexpected error'

router.post('/', async (req, res) => {
    try {
        const restaurant = await RestaurantValidation.restaurantInsert(req.body)

        res.status(200).json({ message: 'restaurant created in database', restaurant})
    } catch(err) {
        res.status(err?.status || 500).json({ message: err.message || defaultError })
    }
})

router.get('/', async (req, res) => {
    try {
        const restaurantKeys = await RestaurantValidation.restaurantList(req.query)

        res.status(200).json({ message: 'list of restaurants with given filters', restaurants: null })
    } catch(err) {
        res.status(err.status || 500).json({ message: err.message || defaultError })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const restaurantUpdateData = await RestaurantValidation.restaurantUpdate(req.params)

        res.status(200).json({ message: 'restaurant updated with new information', restaurant: null })
    } catch(err) {
        res.status(err.status || 500).json({ message: err.message || defaultError })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = await RestaurantValidation.restaurantDelete(req.params)

        res.status(200).json({ message: 'restaurant deleted', restaurant: null })
    } catch(err) {
        res.status(err.status || 500).json({ message: err.message || defaultError })
    }
})

module.exports = router