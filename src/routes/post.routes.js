const express = require("express");
const routes=express.Router();
const authmiddleware = require("../middlewares/auth.middlewares");

router.post("/", 
  authmiddleware,/* req.user=userData */ 
  createPostController)//WHEN EVER WE NEES API WHWERE AUTHENTICATION IS NEEDED WE CAN USE THIS MIDDLEWARE //SECOND PARAMETER IS POST CONTROLLER API


module.exports=routes;