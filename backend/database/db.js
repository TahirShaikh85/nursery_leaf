const mongoose = require('mongoose');
const config = require('../config');

const Connect = async ()=>{
    try {
       const con = await mongoose.connect(config.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology: true
       }) 
       console.log("Mongodb connected");
    } catch (error) {
        console.log("mongodb connection error - ",error);
    }
}

module.exports = Connect;