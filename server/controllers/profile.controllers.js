import { User } from "../models/user.model.js";

// Show profile 
export const showProfile = async(req, res) => { 
    try{
        const { id } = req.body; 

        const showProfile = await User.findById(id);

        // Failed showing profile
        if(!showProfile) {
            return res.status(404).json({message: "No profile to show", success: false});
        }

        //Successful showing profile
        res.status(201).json({success: true, 
            ...showProfile._doc
        })
    }

    catch(error){
        console.log(error.message)
        res.status(500).json({message: 'Internal Server Error', success: false});
    }
}

// Updating profile 
export const editProfile = async(req, res) => {
    try{
        const { id } = req.body; 
        const { name, bio } = req.body;

        const editProfile = await User.findByIdAndUpdate(id, { name, bio }); 

        // Failed updating profile 
        if(!editProfile) {
            return res.status(404).json({message: "User not found", success: false});
        }

        // Successful editing profile 
        res.status(201).json({success: true, 
            ...editProfile._doc
        });

    }

    catch(error){
        console.log(error.message)
        res.status(500).json({message: 'Internal Server Error', success: false});
    }
}