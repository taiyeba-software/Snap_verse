const mongoose = require('mongoose');
/*Mongoose হলো MongoDB এর সাথে কাজ করার জন্য ORM (Object Relational Mapping),
যার মাধ্যমে আমরা সহজে schema ও model তৈরি করতে পারি।*/

const postSchema = new mongoose.Schema({
 image:String,
 caption:String,
 user:{
    type:mongoose.Schema.Types.ObjectId,//MongoDB এ ইউজারের _id কে রেফার করছে।
    ref:"User",
    /*
    প্রতিটি পোস্ট একজন ইউজারের সঙ্গে সম্পর্কিত।

    type: mongoose.Schema.Types.ObjectId → MongoDB এ ইউজারের _id কে রেফার করছে।

    ref: "User" → এই ObjectId আসলে User model থেকে আসছে।

    অর্থাৎ আমরা পরে populate() দিয়ে ইউজারের সব তথ্য নিতে পারব।
    */
    
 }

})

const postModel = mongoose.model("Post",postSchema);
module.exports=postModel;