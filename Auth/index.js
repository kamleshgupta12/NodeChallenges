const express =require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000

app.use(express.json());

// mount 
const user = require('./routes/user');
app.use('/api', user);

// db call 
require('./config/database').connect();


app.listen(PORT,()=>{
    console.log(`Port is Runing....${PORT}`);
});



// const express = require('express');
// const app = express();

// require('dotenv').config();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// require('./config/database').connect()

// const user = require('./routes/user');
// app.use('/api/v1', user);

// app.listen(PORT, () => {
//     console.log(`Port is runing...${PORT}`)
// })