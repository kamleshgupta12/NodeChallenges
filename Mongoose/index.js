const mongoose = require('mongoose');




const main = async () => {
     await mongoose.connect('mongodb://localhost:27017/test');
  

    const schemModel = mongoose.model('list', schemaList);
    const testData = new schemModel({ name: "testData", price:500,address:"mohali" })
    const result = await testData.save();
    console.log(result);
}
// main(); 

const updateData = async()=>{
    const schemaList = new mongoose.Schema({
        name: String,
        price:Number,
        address:String
    });
    await mongoose.connect('mongodb://localhost:27017/test');
    const schemModel = mongoose.model('list', schemaList);
    const data = await  schemModel.updateOne({name:"testData"},{$set:{price:2323}})
    console.log(data)
}
// updateData()

const deleteData = async()=>{
    await mongoose.connect('mongodb://localhost:27017');
    const schemaList = new mongoose.Schema({
        name: String,
        price:Number,
        address:String
    });
    const model= new mongoose.model('list', schemaList);
    const data = await model.deleteOne({name:"testData"})
    // const result =  data.save()
    console.log(data)
}
// deleteData()

const find=async()=>{
    await mongoose.connect('mongodb://localhost:27017');
    const schemaList = new mongoose.Schema({
        name: String,
        price:Number,
        address:String 
    });
    const f = mongoose.model('list', schemaList)
    const data =await f.find({});
    console.log(data)
}
find()