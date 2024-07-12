const main =require('../Get API Method/server');
const express = require('express');
const app =  express();


app.put('/',async(req,resp)=>{
    
    const data = await main();
    const alldata = await data.updateOne({name:"babu"},{$set:{fees:"2020"}})
    resp.send(alldata)
    console.log(alldata)    
})

app.listen(3000,()=>{
    console.log("Port Running.........")
})