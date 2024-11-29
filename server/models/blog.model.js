import mongoose from "mongoose";

const blogSchema = new mongoose.Schema ({
    profile_img: {
        type: String
    },
    title: {
        type: String, 
        required: true, 
        unique: true
    }, 
    content: {
        type: String, 
        required: true
    }
})

export const Blog = mongoose.model("Blog", blogSchema);