const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

// dotenv must be first
dotenv.config()

const app = express()

// middleware
app.use(cors())
app.use(express.json())

// serve frontend
app.use(express.static('frontend'))

// routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoutes'))

// port
const PORT = process.env.PORT || 8080

// listen
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})