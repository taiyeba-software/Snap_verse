//Controllers হলো সেই function গুলো যা actual কাজ করে—data নেয়, database-এ পাঠায়, response দেয়।
const usermodel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await usermodel.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const user = await usermodel.create({
         username, 
         password:await bcrypt.hash(password,10) //🔐 Password hashing
         });

    const token = jwt.sign({ id: user._id }, process.env.jwtSecret);

    res.cookie("token", token, { //Frontend এই নাম দিয়ে cookie access করতে পারবে //এই token frontend বা browser store করবে future requests-এর জন্য
      httpOnly: true,//Cookie JavaScript দিয়ে access করা যাবে না
      secure: true,//Cookie শুধু HTTPS connection-এ পাঠানো হবে
      maxAge: 86400000 // 1 day :Cookie কতক্ষণ থাকবে—milliseconds-এ
    });

    res.status(201).json({
      message: "User registered successfully",
      user
    });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await usermodel.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const ispasswordvalid=await bcrypt.compare(password,user.password);//


    // 🔐 Password check (plaintext for now)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.jwtSecret);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 86400000 // 1 day
    });

    res.status(200).json({
      message: "Login successful",
      user
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

module.exports = { 
    registerUser,
    loginUser
 };
