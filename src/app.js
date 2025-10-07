const express =require('express');
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const cookieParser = require('cookie-parser');


const app = express();
app.use(cookieParser());//🍪 "Cookie পাঠালে, cookie-parser ছাড়া Express বুঝবে না—তাই middleware লাগবেই!"
app.use(express.json());//🧃 "express.json() না দিলে, body থাকবে empty!"
app.use('/auth',authRoutes); //এই line বলে: “যে routes authRoutes-এ আছে, তাদের সব path /auth দিয়ে শুরু হবে।”
app.use('/posts',postRoutes);

module.exports = app;