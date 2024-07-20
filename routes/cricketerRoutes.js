import express from "express";
import { getAllCricketers, signup } from "../controllers/cricketerControllers.js";
const cricketerRouter = express.Router()

cricketerRouter.post("/signup", signup)
cricketerRouter.get("/get-all", getAllCricketers)

export default cricketerRouter