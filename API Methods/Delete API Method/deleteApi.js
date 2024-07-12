const express = require('express');
const main = require('./server');
const app = express();

app.use(express.json())

app.delete('/',async(rep,resp)=>{
    const data = await main();
    const alldata = data.deleteOne({name:})
})

app.listen(3000,()=>{
    console.log("Port Runnnnnnn")
})