import { Announcement } from "../models/announcement.model.js";

// Creating New Announcement 
export const createAnc = async(req, res) => {
    try {
        const { title, content, date } = req.body; 

        // Require all fields 
        if(!title || !content|| !date) {
            return res.status(400).json({message: 'All fields are required', success: false});
        } 

        // Creating new announcement
        const newAnc = new Announcement({
            title, 
            content, 
            date
        }); 
        await newAnc.save(); 
        res.status(201).json({success: true,
            Announcement : {
                ...newAnc._doc
            }
        });
    }

    catch(error) {
        console.log(error.message)
        res.status(500).json({message: 'Internal Server Error', success: false});
    }
}

// Deleting Existing Announcement 
export const deleteAnc = async(req, res) => {
    try {
        const { id } = req.body; 

        const deleteAnc = await Announcement.findByIdAndDelete(id); 

        // Failed deleting announcement 
        if(!deleteAnc){
            return res.status(404).json({message: 'Announcement not found', success: false});
        }

        // Successful deleting announcement 
        return res.status(200).json({message: "Announcement was deleted successfully", success: true }); 
    }

    catch(error) {
        console.log(error.message)
        res.status(500).json({message: 'Internal Server Error', success: false});
    }
}

// Showing Existing Announcement 
export const showAnc = async(req, res) => {
    try {
        const { id } = req.body; 

        const showAnc = await Announcement.findById(id); 

        // Failed showing announcement
        if(!showAnc) {
            return res.status(404).json({message: "No announcement to show", success: false});
        }

        // Successful showing announcement
        res.status(201).json({success: true,
            ...showAnc._doc
        }); 
    }

    catch(error) {
        console.log(error.message)
        res.status(500).json({message: 'Internal Server Error', success: false});
    }
}

// Updating Existing Announcement
export const editAnc = async(req, res) => {
    try {
        const { id } = req.body; 
        const { title, content, date } = req.body;  

        const editAnc = await Announcement.findByIdAndUpdate(id, { title, content, date }); 

        // Failed editing announcement
        if(!editAnc) {
            return res.status(404).json({message: "No announcement to show", success: false});
        }

        // Successful editing announcement
        res.status(201).json({success: true,
            ...editAnc._doc
        });
    }

    catch(error) {
        console.log(error.message)
        res.status(500).json({message: 'Internal Server Error', success: false});
    }
}