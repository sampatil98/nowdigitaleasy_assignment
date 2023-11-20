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
            error:error.message
        })
    }
});


userRouter.get("/allusers",async(req,res)=>{
    try {

        let users= await UserModel.find();
        res.status(200).send({
            isError:false,
            message: "All users data",
            data:users
        })
        
    } catch (error) {
        res.status(400).send({
            isError:true,
            error:error.message
        })
    }
});

userRouter.get("/getuser/:id",async(req,res)=>{
    try {

        const {id}=req.params;

        let user= await UserModel.findOne({_id:id});

        if(!user){
            return res.status(400).send({
                isError:true,
                message: "User not found please provide correct user id"
            })
        }
        res.status(200).send({
            isError:false,
            message: "perticular users data",
            data:user
        })
        
    } catch (error) {
        res.status(400).send({
            isError:true,
            error:error.message
        })
    }
});





module.exports={userRouter};