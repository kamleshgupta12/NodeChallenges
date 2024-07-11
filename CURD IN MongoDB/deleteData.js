const mongoData = require("./MongoDb");

const delet = async()=>{
const data = await mongoData();
const deleteData = data.deleteMany({name:"kamlesh"})
}
delet()