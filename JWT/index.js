const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bodyParser  = require('body-parser')
const routes = require('./Routes/Authentication.js')
const beforeRoutes=require('./Routes/Authorisation.js')
const http = require('http').Server(app)
app.use(express.json())
app.use("/auth",routes)
app.use("/beforeAuth",beforeRoutes);

http.listen(8000,()=>{
    console.log("server successfully executing on port number 8000")
})