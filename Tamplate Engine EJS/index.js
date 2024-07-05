const express = require('express');
const app= express();


app.set('view engine','ejs')

app.get('/profile',(req,resp)=>{
    const data = {
        name:"kamlesh",
        email:"kamlesh@gmail.com",
        city:"kushinagar",
        skills:["javascrip","php","sql","node","kamlsh"]
    }
    resp.render('profile',{data})
})

app.get('/',(req,resp)=>{
    resp.render('about')
})

app.listen(3000)