// const { log } = require('console');
const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const Database = 'student';
const client = new MongoClient(url);


async function mongoData(){
    const result = await client.connect();
    const db = result.db(Database)
    const collection = db.collection('studentData')
    const data = await collection.find({}).toArray();
    console.log(data);
}

mongoData();

