const express = require('express')
const app = express()
const path = require('path')

const name= path.join(__dirname,'Pages')
// console.log(name);
// app.use(express.static(name));

app.get('',(req,resp)=>{
    resp.sendFile(`${name}/index.html`)
})

app.get('/about',(req,resp)=>{
    resp.sendFile(`${name}/About.html`)
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${name}/404page.html`)
})
app.listen(1213)