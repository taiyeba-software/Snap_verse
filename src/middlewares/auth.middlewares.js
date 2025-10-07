const jwt = require("jsonwebtoken");//token verify করার জন্য
const userModel = require("../models/user.model");//token থেকে পাওয়া user ID দিয়ে ডাটাবেজে ইউজার খুঁজে বের করার জন্য


async function authmiddleware(req,res,next){
    const token =req.cookies.token; 
    /*👉 এখানে request-এর ভিতর থেকে cookie থেকে token বের করা হচ্ছে।
    তুমি তো login/register এর সময় cookie তে token পাঠিয়েছিলে, তাই না? 😄
    এখানে সেই tokenটা নেওয়া হচ্ছে।
    */

    if(!token){
        return res.status(401).json({message:"No token provided"});
    }

      try{
        const decode = jwt.verify(token,process.env.jwtSecret)
        
        /*👉 এখন token টা verify করা হচ্ছে —
            মানে, এই token টা আসলেই সার্ভার বানানো কিনা সেটা দেখা হচ্ছে।

            যদি এটা ভুয়া token হয় বা মেয়াদ শেষ হয়ে যায় → তাহলে নিচের catch ব্লকে যাবে।

            decode এর ভিতরে থাকবে token তৈরি করার সময়ের data, যেমন:

            {id: user._id}

        */

        const user = await userModel.findOne({
          _id:decode.id
        })

        req.user = user;
        next();
 
      }catch(err){
        return res.status(401).json({message:"Invalid token"});
      } 

}

module.exports=authmiddleware;