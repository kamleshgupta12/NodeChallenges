const mongoose = require('mongoose');

const fileSchem = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    imageUrl:{
        type:String
    },
    tags:{
        type:String
    }

})

const file  =  mongoose.model("File",fileSchem );
module.exports =  file;
