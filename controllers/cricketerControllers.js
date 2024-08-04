import Cricketer from "../models/cricketModel.js";

export const signup = async (req, res) => {
    try {
        const { name, email, password, highestScores, average, image } = req.body

        const newCricketer = new Cricketer({ name, email, password, highestScores, average, image });

        await newCricketer.save();
        return res.status(200).json(newCricketer)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const login = async (req,res) => {
    try {
        const {email, password} = req.body;

        const user = await Cricketer.findOne({email})

        if(!user){
            return res.status(400).json("Invalid email")
        }

        if(user.password !== password){
            return res.status(400).json("Invalid password")
        }

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getAllCricketers = async(req,res)=>{
    try {
        const cricketers = await Cricketer.find()
        return res.status(200).json(cricketers)
    } catch (error) {
        return res.status(500).json(error)
    }
}