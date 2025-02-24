import express from "express"
import dotenv from "dotenv"
// import { connect } from "mongoose";
import connectDB from "./database/db.js";

dotenv.config({});
// Call DB Connection here
connectDB();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Sever start at port no ${PORT}..`);
})