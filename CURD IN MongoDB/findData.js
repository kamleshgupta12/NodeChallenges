// const mongoData = require("./MongoDb");

const find = async()=>{
const data = await mongoData();
const findData = await data.find().toArray();
console.log(findData);

}
find()