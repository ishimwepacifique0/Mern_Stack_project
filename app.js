const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
require('dotenv').config()

const postroutes = require('./routes/posts.router')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api',postroutes)

app.listen(PORT,(req,res)=>{
    console.log(`server is running on ${PORT}`)
})