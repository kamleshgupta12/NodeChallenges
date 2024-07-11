const getData = require('./server');

const data = async()=>{
    const next = await getData();
    const result = await next.find().toArray()
    console.log(result);
}

data();