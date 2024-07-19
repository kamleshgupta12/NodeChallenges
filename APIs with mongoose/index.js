const express = require('express');
require('./database')
const database = require('./dbschame')

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/create', async (req, resp) => {
    console.log(req.body)
    try {
        const data = await database.insertMany(req.body)
        resp.send(data)
        console.log("workign data save succussfully")
    } catch (err) {
        console.log(err)
    }

})

app.delete('/delete/:_id', async (req, resp) => {
    console.log(req.params)
    const data = await database.deleteOne(req.params)
    resp.send(data)
})

app.put('/update/:_id', async (req, resp) => {
    console.log(req.params._id)
    const data = await database.updateOne(req.params._id, {
        $set:
            req.body
    })
    console.log(data)
    resp.send(data)
})


app.listen(3000, () => {
    console.log("Port is Running..........")
})