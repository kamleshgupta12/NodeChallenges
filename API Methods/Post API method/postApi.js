const express =require('express')
const main = require('../server')
const app=express();
app.use(express.json())

app.post('/',async(req,res)=>{
    const data = await main();
    const alldata= await data.insertOne(req.body);
    res.send(req.body)
    console.log(alldata)
})




// app.get('/',async(req,res)=>{
//     const data = await main();
//     const allData = await data.find({} ).toArray();
//    res.send(allData)
// })

app.listen(2000,()=>{
    console.log("Port Running..")
});
