const express=require("express");
const cors=require("cors");
require("dotenv").config();

const {connection}=require("./Config/db");

const app=express();

app.use(express.json());



app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log("Connected to DB");
        console.log(`Server is running on PORT ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
})