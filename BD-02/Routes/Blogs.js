const express = require('express');
const router = express.Router()


const {DummyLink} = require('../controllers/LikeController')


router.get('/dummyroute',DummyLink);


module.exports = router;