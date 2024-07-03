
const http = require('http')

const srver = (req,resp)=>{
    resp.write("Kamlesh")
    resp.end()
}
http.createServer(srver).listen(1200)