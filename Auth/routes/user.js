const express = require('express');
const router = express.Router();
const {auth,isAdmin,isStudent} = require('../midlewares/auth')
const { signup, login } = require('../controllers/Auth');

router.post('/login', login);
router.post('/signup', signup);


// testing 

router.get('/test', auth, (req,resp)=>{
    resp.status(200).json({
        success:true,
        message:'testing route'
    })
})

// Protected Routes 

router.get('/student', auth, isStudent, (req,resp)=>{
    resp.status(200).json({
        success:true,
        message:"Welcome To The Protected Route Of Student"
    })
})
router.get('/admin', auth, isAdmin, (req,resp)=>{
    resp.status(200).json({
        success:true,
        message:'Welcome to the Protected Route of Admin'
    })
})

module.exports = router;



// const express = require('express');
// const router = express.Router();

// const {login, signup} = require('../controllers/Auth');

// // router.post('/login', login);
// router.post('/signup', signup);

// module.exports = router;