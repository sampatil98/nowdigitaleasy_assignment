const {Router}=require("express");

const {UserModel}=require("../Models/user.model");

const userRouter=Router();


userRouter.post("/adduser",async(req,res)=>{
    try {
        let {name,email,phoneNumber,role}=req.body;

        let user= new UserModel({name,email,phoneNumber,role});
        await user.save();

        res.status(200).send({
            isError:false,
            message: "New user created successfully",
            data:user
        })
        
    } catch (error) {
        res.status(400).send({
            isError:true,
            error
        })
    }
})





module.exports={userRouter};