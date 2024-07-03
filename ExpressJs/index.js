const express = require('express')
const app=express();

app.get('/',(req,resp)=>{
resp.send('Welcome to  home page'+ req.query.name)
})

app.get('/about',(req,resp)=>{
resp.send('this is about page')
})

app.listen(2000)