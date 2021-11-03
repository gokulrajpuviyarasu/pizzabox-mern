
const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://gokulraj13:8438282545@cluster0.4f74d.mongodb.net/pizzabox'


mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})

var db= mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successful');
})

db.on('error' , ()=>{
    console.log('Mongo DB Connecion Failed');
})

module.exports = mongoose