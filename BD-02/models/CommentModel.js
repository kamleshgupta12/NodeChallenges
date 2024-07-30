const mongoose = require('mongoose');


const commentSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Comment", commentSchema)