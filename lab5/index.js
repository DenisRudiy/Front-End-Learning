const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config();

const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, ()=> {
    console.log(`server start at port ${PORT}`)
})