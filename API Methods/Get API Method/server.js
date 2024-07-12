const { MongoClient, Collection } = require("mongodb");
const url = 'mongodb://localhost:27017'
const database = 'student';
const client = new MongoClient(url)

const main = async()=>{
    const join = await   client.connect();
    const locaDatabase = join.db(database);
    const localCollection = locaDatabase.collection('studentData');
    // const result = await localCollection.find().toArray()
    // console.log(result);
    return localCollection;
}
module.exports = main;
