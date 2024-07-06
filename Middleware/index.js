const express = require('express')
const app=express();
const filterReq = require('./Middleware')
const route=express.Router()


route.use(filterReq)

app.get('/',(req,resp)=>{
    resp.send("Welcome to Home Page...")
})
route.get('/help',(req,resp)=>{
    resp.send("This is a help Page...")
})

app.use('/',route)
app.listen(1212)