import Cricketer from "../models/cricketModel.js";

export const signup = async (req, res) => {
    try {
        const { name, highestScores, average, image } = req.body

        const newCricketer = new Cricketer({ name, highestScores, average, image });

        await newCricketer.save();
        return res.status(200).json(newCricketer)
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