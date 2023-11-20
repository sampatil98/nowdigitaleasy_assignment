const {Router}=require("express");

const {UserModel}=require("../Models/user.model");

const userRouter=Router();


userRouter.post("/addUser",async(req,res)=>{
    try {
        let {name,email,phoneNumber,role}=req.body;

        let user= new UserModel({name,email,phoneNumber,role});
        await user.save();

        res.status(201).send({
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


userRouter.get("/allUsers",async(req,res)=>{
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

userRouter.get("/getUser/:id",async(req,res)=>{
    try {

        const {id}=req.params;

        let user= await UserModel.findOne({_id:id});

        if(!user){
            return res.status(404).send({
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

userRouter.delete("/deleteUser/:id",async(req,res)=>{
    try {

        const {id}=req.params;

        let user= await UserModel.findByIdAndDelete(id);

        if(!user){
            return res.status(404).send({
                isError:true,
                message: "User not found please provide correct user id"
            })
        }
        res.status(200).send({
            isError:false,
            message: `user data with id : ${id} removed from database `,
            data:user
        })
        
    } catch (error) {
        res.status(400).send({
            isError:true,
            error:error.message
        })
    }
});

userRouter.put("/updateUser/:id",async(req,res)=>{
    try {
        let {name,email,phoneNumber,role}=req.body;
        let {id}=req.params;

        let user= await UserModel.findOneAndReplace({_id:id},{name,email,phoneNumber,role});

        if(!user){
            return res.status(404).send({
                isError:true,
                message: "User not found please provide correct user id"
            })
        }
        res.status(200).send({
            isError:false,
            message: `user data with id : ${id} updated successfully`,
        })
        
    } catch (error) {
        res.status(400).send({
            isError:true,
            error:error.message
        })
    }
});


module.exports={userRouter};