const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017'
const database = 'student';
const client = new MongoClient(url);

const mongoData = async()=>{
     const connect = await client.connect();
     const localData = connect.db(database);
     const colectionData =  localData.collection('studentData');
     return colectionData;
//      const result = await colectionData.find({}).toArray();
// console.log(result);

}
module.exports = mongoData;