const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRoute = require('./routes/AuthRoute')

const PORT = process.env.PORT || 3001
const app = express()


app.use(cors())
app.use(logger('dev'))
app.use(express.json())

//ROUTES GO HERE
app.use('/auth', AuthRoute)


app.listen(PORT, () => { 
    console.log(`Express listening on port ${PORT}`)
})