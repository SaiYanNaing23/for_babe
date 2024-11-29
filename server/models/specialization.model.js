import mongoose from "mongoose";

const specializationSchema = new mongoose.Schema({
    career : {
        type: String,
        default : "",
    },
    specializations : {
        type : Array,
        default : [],
    }
})


export const Specialization = mongoose.model("Specialization", specializationSchema);