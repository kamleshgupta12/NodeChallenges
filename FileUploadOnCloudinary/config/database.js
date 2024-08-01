const mongoose = require('mongoose');

require('dotenv').config();

exports.connect = async()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("DB Connect Successfully........")
    })
    .catch(()=>{
        console.log("Issues In DB Connection........");
        console.error(error);
        process.exit(1);
    })
}