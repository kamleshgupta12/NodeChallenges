const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017'
const Database = 'student'
const client = new MongoClient(url);

async function getData(){
    const conetion = await client.connect();
    const local = conetion.db(Database);
   return local.collection('studentData');
    // const result = await collection.find({}).toArray();
    // console.log(result);

}
module.exports = getData;