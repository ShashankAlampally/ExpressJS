const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/ojas")


const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String,
        unique:true

    },
    password:{
        type:String
    },
    token:{
        type:String
    }
})
module.exports=mongoose.model("user",userSchema)