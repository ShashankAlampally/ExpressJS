const express = require('express')
const router = express.Router();
const {home} = require("../Controllers/userControllers.js")
router.get("/",home)
module.exports=router;