import express from "express";
import { getAllCricketers, login, signup } from "../controllers/cricketerControllers.js";
const cricketerRouter = express.Router()

cricketerRouter.post("/signup", signup)
cricketerRouter.post("/login", login)
cricketerRouter.get("/get-all", getAllCricketers)

export default cricketerRouter