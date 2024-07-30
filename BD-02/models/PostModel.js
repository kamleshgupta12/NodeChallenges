const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },
  likes: [{
    type: mongoose.Schema.Type.ObjectId,
    ref: "Like"
  }],
  comment: [{
    type: mongoose.Schema.Type.ObjectId,
    ref: "Like"
  }]
});

module.exports = mongoose.model("Post", postSchema)