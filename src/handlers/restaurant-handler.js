const RestaurantService = require('../services/restaurant-service')
const RestaurantValidation = require('../validations/restaurant-validation')

const router = require('express').Router()

const defaultError = 'unexpected error'

router.post('/', async (req, res) => {
    try {
        const restaurant = await RestaurantValidation.restaurantInsert(req.body)

        await RestaurantService.insertRestaurant(restaurant)

        res.status(200).json({ message: 'restaurant created in database', restaurant})
    } catch(err) {
        res.status(err?.status || 500).json({ message: err.message || defaultError })
    }
})

router.get('/', async (req, res) => {
    try {
        const restaurantKeys = await RestaurantValidation.restaurantList(req.query)

        const restaurants = await RestaurantService.getRestaurant(restaurantKeys)

        res.status(200).json({ message: 'list of restaurants with given filters', restaurants })
    } catch(err) {
        res.status(err.status || 500).json({ message: err.message || defaultError })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const id = await RestaurantValidation.restaurantId(req.path.substring(1))
        const restaurantUpdateData = await RestaurantValidation.restaurantUpdate(req.body)

        const restaurant = await RestaurantService.updateRestaurant(id, restaurantUpdateData)

        res.status(200).json({ message: 'restaurant updated with new information', restaurant })
    } catch(err) {
        res.status(err.status || 500).json({ message: err.message || defaultError })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = await RestaurantValidation.restaurantId(req.path.substring(1))

        const restaurant = await RestaurantService.deleteRestaurant(id)

        res.status(200).json({ message: 'restaurant deleted', restaurant })
    } catch(err) {
        res.status(err.status || 500).json({ message: err.message || defaultError })
    }
})

module.exports = router