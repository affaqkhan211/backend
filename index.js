import express from "express";
const app = express();
import Connection from "./db/conn.js";
import dotev from "dotenv"

dotev.config()
const PORT = process.env.PORT;

Connection()
app.listen(PORT,()=>{
    console.log("Backend is running");
})
