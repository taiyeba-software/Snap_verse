const express = require('express');
const usermodel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();
/*
post /register
post/login
get/user [protocol]
*/

    router.post('/register',async(req,res)=>{
        const{username,password}=req.body;

        const existingUser = await usermodel.findOne({username});
        if(existingUser){
            return res.status(409).json({message:"Username already exists"});
        }

        const user =await usermodel.create({username,password});

        const token =jwt.sign({ 
            id:user._id 
        },process.env.jwtSecret)


        res.cookie("token",token)
        /*🔍 res.cookie(...)
        Express-এর function যা browser-এ cookie পাঠায়

        তুমি বলছো: “এই token কে cookie হিসেবে পাঠাও, যাতে frontend store করতে পারে”
        */

        /*
        🔍 "token" → cookie name
            তুমি cookie-এর নাম দিচ্ছো "token"

            frontend এই নাম দিয়ে cookie access করতে পারবে

        🔍 token → cookie value
            JWT token itself—যেটা তুমি আগের লাইনে বানিয়েছো
        */

        res.status(201).json({
            message:"User registered successfully",
            user
        });
    })

module.exports = router
