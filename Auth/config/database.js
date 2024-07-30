const mongoose = require('mongoose');
require('dotenv').config();

exports.connect =  () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => { console.log("DB Connect SuccessFully") })
        .catch((Error) => {
            console.log("Error in DB Connection")
            console.error(Error);
            process.exit(1);
        });

}




// const mongoose = require('mongoose');
// require('dotenv').config();

// exports.connect = ()=>{
// mongoose.connect(process.env.DATABASE_URL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then(()=> {console.log("DB Connection Successful")})
// .catch(()=>{console.log("Error In Connection")
//     console.error(err);
//     process.exit(1);
// })
// }