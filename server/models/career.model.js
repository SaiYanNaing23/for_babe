import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
    field : {
        type: String,
        default : "",
    },
    careers : {
        type : Array,
        default : [],
    }
})


export const Career = mongoose.model("Career", careerSchema);