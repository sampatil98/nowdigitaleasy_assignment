const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:Number,
        require:true
    },
    role:{
        type:String,
        require:true
    }
});

const UserModel= mongoose.model("user",userSchema);

module.exports={UserModel}