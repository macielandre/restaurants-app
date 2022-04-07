const router = require('express').Router()

router.post('/', async (req, res) => {
    const restaurant = req.body
    
    res.status(200).json({x})
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