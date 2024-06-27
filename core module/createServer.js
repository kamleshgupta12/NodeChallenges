
const http = require('http')

const ser=(req,resp)=>{
    resp.write("<h1>Hello hfeygq this nhjk is a demo server</h1>")
    resp.end();
}
http.createServer(ser).listen(1200);