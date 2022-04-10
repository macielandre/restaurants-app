const router = require('express').Router()
const multer = require('multer')
const upload = multer({ dest: 'upload/'})

router.post('/update', upload.single('file'), async (req, res) => {
    try {
        const { file } = req

        res.status(200).json({ message: file })
    } catch(err) {
        res.status(err?.status || 500).json({ message: err.message || defaultError })
    }
})

module.exports = router