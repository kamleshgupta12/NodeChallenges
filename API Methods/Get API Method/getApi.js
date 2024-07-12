const express = require('express');
const main = require('./server');
const app = express();

// app.get('/' ,async(req,resp)=>{
//     const data =await main();
//     const apiData = await data.find().toArray();
// resp.send(apiData)
// })


app.listen(5000)