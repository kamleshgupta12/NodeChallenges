const http =require('http')
const data = require('./data')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'Application/json'});
    resp.write(JSON.stringify(data))
    resp.end();
}).listen(3000)
