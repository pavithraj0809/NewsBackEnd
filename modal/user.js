const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    mobile:{
        type:Number
    },
    category:{
        type:String
    }
})
module.exports=mongoose.model('users',userSchema);