const express = require('express')
const { sendEmailController } = require('../controllers/portfolioControllers')

//router object
const router = express.Router()

//routes
router.post('/sendEmail', sendEmailController)

//exporting it to other files
module.exports = router