const router = require('express').Router()

router.get('/', async (req, res) => {
    res.status(200).json({test: 'working'})
})

module.exports = router