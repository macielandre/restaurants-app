const router = require('express').Router()
const multer = require('multer')
const upload = multer({ dest: 'upload/'})
const FileHelper = require('../helpers/file-helper')
const RabbitMQ = require('../messagery/rabbitmq')

router.post('/update', upload.single('file'), async (req, res) => {
    try {
        await FileHelper.readCsv(req.file)

        RabbitMQ.sendToQueue({ teste: 'oi' })

        res.status(200).json({ message: 'file sent to server' })
    } catch(err) {
        res.status(err?.status || 500).json({ message: err.message || defaultError })
    }
})

module.exports = router