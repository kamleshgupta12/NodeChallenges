// const mongoData = require("./MongoDb");

const update =async()=>{
    const data = await mongoData();
    const updateData = await data.updateMany({name:"gupta",},{$set:{name:"Kamlesh",course:"MCA"}});
    console.log(updateData);
}
update()
