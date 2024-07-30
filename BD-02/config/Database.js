const mongoose = require("mongoose"); 
require("dotenv").config();

const dbconnect =()=>{
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifieldTopology :true,
})
.then(()=> console.log("Databse Connect Successfuly"))
.catch((error)=>{
    console.log("Err In Database Connection")
    console.error(error.message)
    process.exit(1);
})
}

module.exports = dbconnect;