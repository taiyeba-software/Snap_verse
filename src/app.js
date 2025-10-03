const express =require('express');
const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(express.json());//🧃 "express.json() না দিলে, body থাকবে empty!"
app.use('/auth',authRoutes); //এই line বলে: “যে routes authRoutes-এ আছে, তাদের সব path /auth দিয়ে শুরু হবে।”

module.exports = app;