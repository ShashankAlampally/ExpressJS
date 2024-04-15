const express = require('express')
const router = express.Router();
const {login,signup,home} = require("../Controllers/userControllers.js")
router.get("/login",login)
router.post("/signup",signup)
module.exports=router;