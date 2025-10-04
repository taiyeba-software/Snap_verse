// 📍 Routes হলো সেই জায়গা যেখানে তুমি ঠিক করো—কোন URL এ কোন কাজ হবে।

const express = require('express');
const { registerUser } = require('../controllers/auth.controller'); // Controller import
const { loginUser } = require('../controllers/auth.controller');

const router = express.Router();

/*
📦 Available Routes:
POST   /auth/register   → Register new user
POST   /auth/login      → Login user (to be added)
GET    /auth/user       → Get user info (to be added)
*/

router.post('/register', registerUser); // Controller handles logic
router.post('/login', loginUser); // Login route

module.exports = router;
