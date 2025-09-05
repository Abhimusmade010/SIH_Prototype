const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');

const registerUser = async (req, res) => {
    const{username, email, password} = req.body;

    try {
        const existingUser = await userModel.findOne({ email });  //check is already user exists with same email


        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' }); // is exists return message thats uswr already exists
        }   
        const hashedPassword = await bcrypt.hash(password, 10);    //hashed the oroginal passsowrd before creating user 
        
        const newUser = new User(
            { 
                username, email, 
                password: hashedPassword 
            }
        );

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }   
};