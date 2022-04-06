const router = require('express').Router()

router.post('/', async (req, res) => {
    res.status(200).json({test: 'working'})
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