const http = require('http')

http.createServer((req,resp)=>{
    resp.write("<h1>demo jslk server </h1>")
}).listen(1300)