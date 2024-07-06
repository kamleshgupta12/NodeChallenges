module.exports = filterReq = (req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please Enter age")
    }
    else if(req.query.age < 18){
        resp.send("Please Enter  vailid age")

    }
    else{
        next()
    }

}