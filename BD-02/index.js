const express =require('express');
const { use } = require('./Routes/Blogs');
const app =express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;
//midleware
app.use(express.json())

const blog = require('./Routes/Blogs');
//mount
app.use('/api/v1',blog);

const dbconnect = require('./config/Database');
dbconnect();


app.listen(PORT,()=>{
console.log(`Port is Running ${PORT}`)
});

app.get('/',(req,resp)=>{
    resp.send("This Is  My Home Page Baby")
})