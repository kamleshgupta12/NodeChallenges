const mongoose = require('mongoose');


const likeSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Like", likeSchema)