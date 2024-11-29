import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    specialization : {
        type: String,
        default : "",
    },
    skills : {
        type : Array,
        default : [],
    }
})


export const Skill = mongoose.model("Skill", skillSchema);