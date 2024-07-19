const mongoose = require('mongoose');
const dbschema = new mongoose.Schema({
    name:String,
    course:String,
    fees:Number,
    batch:Number
});

module.exports = mongoose.model('list', dbschema);