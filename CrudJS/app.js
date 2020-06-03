const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://Shubham:G4ZmhPAFGXVChTRO@credenceassignment-mapg0.mongodb.net/Assignment'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
//userName  : Shubham
//pwd : G4ZmhPAFGXVChTRO


con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/Assignment',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})