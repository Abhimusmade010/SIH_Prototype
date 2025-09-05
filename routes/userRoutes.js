const {registerUser}= require('../controllers/userController');
const express = require('express');


const router = express.Router();

router.post('/register', registerUser);  //route for registering user   


module.exports = router;

