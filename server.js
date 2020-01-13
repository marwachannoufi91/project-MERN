var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')
var bodyParser= require('body-parser')
var app = express()
var port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:true
    })
)
const mongoURI='mongodb://localhost:27017/userloginreg'
mongoose.connect(mongoURI,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
        .then(()=>console.log('mongoDB connected'))
        .catch(err=>console.log(err))
var Users = require('./routes/Users')
app.use('/users',Users)
app.listen(port,()=>{
    console.log('server is running on port :'+port)
})