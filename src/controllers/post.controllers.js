const postModel = require("../models/post.models");//এর মাধ্যমে আমরা MongoDB এ নতুন post save করতে পারব, query করতে পারব ইত্যাদি।

async function createPostController(req, res) {
    const file=req.file;
    /*
    এটা হল Multer বা Cloudinary upload থেকে আসা ফাইল।

    যখন user /posts/create route এ ছবি আপলোড করে, Multer middleware বা Cloudinary middleware
    সেই ছবি process করে এবং req.file এ রাখে।

    উদাহরণ:
    req.file = {
    path: "https://res.cloudinary.com/snapverse/abc123.jpg",
    originalname: "sunset.png",
    mimetype: "image/png",
    size: 23456
    }

    */
}