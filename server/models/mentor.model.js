import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema({
    name : {
        type: String,
        default : "",
    },
    gender : {
        type: String,
        default : "",
    },
    age : {
        type: Number,
        default : 0,
    },
    field : {
        type: String,
        default : "",
    },
    career : {
        type: String,
        default : "",
    },
    job_title : {
        type: String,
        default : "",
    },
    skills : {
        type : Array,
        default : [],
    },
    company : {
        type: String,
        default : "",
    },
    bio : {
        type : String,
        default : "",
    },
    agreedMenteeIds : {
        type : Array,
        default : [],
    },
    bookedMenteeIds : {
        type : Array,
        default : [],
    }
})


export const Mentor = mongoose.model("Mentor", mentorSchema);