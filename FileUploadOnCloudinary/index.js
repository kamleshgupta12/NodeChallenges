const express =  require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;


// midleware 
app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// DB Connection 
const db = require('./config/database');
db.connect();

// cloudinary Connection 

const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

// route mount 

const Upload = require('./routes/FileUpload');
app.use('/api/v1/upload', Upload);

// server connect 
app.listen(PORT, ()=>{
    console.log(`Port Is Runing at ${PORT}`);
})