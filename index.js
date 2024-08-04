import express from "express"
import dotenv from "dotenv"
import Connection from "./db/conn.js"
import cricketerRouter from "./routes/cricketerRoutes.js"
import cors from "cors"

const app = express()
dotenv.config()

const port = process.env.PORT
app.use(express.json())
app.use(cors())

Connection()

app.use("/cricketers/api", cricketerRouter)
app.listen(port,()=>{
    console.log("Listening on port 8000");
})

