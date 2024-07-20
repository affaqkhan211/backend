import mongoose from "mongoose";

const cricketerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    highestScores : {
        type : Number,
        required : true
    },
    average : {
        type : Number,
        required : true
    },
    image : {
        type : String
    }
})

const Cricketer = mongoose.model("Cricketer", cricketerSchema)

export default Cricketer
