// const mongoData = require("./MongoDb")

const insert = async () => {
    const data = await mongoData();
    const insertData = data.insertMany(
        [{
         name:"john",
         course:"LLB",
         fees:2938
        },
        {
            name:"deepak",
            course:"LKG",
            fees:10
        }
    ]
    )
}
insert();