import mongoose from "mongoose"; 

const announcementSchema = new mongoose.Schema ({
    title: {
        type: String, 
        required: true
    }, 
    content: {
        type: String, 
        required: true
    }, 
    date: { 
        type: Date, 
        required: true
    }
})

export const Announcement = mongoose.model("Announcement", announcementSchema);