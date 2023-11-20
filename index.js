const express=require("express");
const cors=require("cors");
require("dotenv").config();

const {connection}=require("./Config/db");
const {userRouter}=require("./Routes/user.routes");

const app=express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send(`<h1> Welcome to USER APIs Backend </h1>`);
})


app.use("/user",userRouter)

app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log("Connected to DB");
        console.log(`Server is running on PORT ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
})