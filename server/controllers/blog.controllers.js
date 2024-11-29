import { Blog } from "../models/blog.model.js"; 

export const createBlog = async(req, res) => {
    try {
        const { profile_img, title, content} = req.body; 

        // Require all fields 
        if(!profile_img || !title || !content) {
            return res.status(400).json({message: 'All fields are required', success: false});
        } 

        // Creating new blog 
        const newBlog = new Blog({
            profile_img, 
            title,
            content
        }); 
        await newBlog.save(); 
        res.status(201).json({success: true,
            Blog : {
                ...newBlog._doc
            }
        }); 
    }

    catch(error) {
        console.log(error.message)
        res.status(500).json({message: 'Internal Server Error', success: false});
    }
}

export const deleteBlog = async(req, res) => {
    try {
        const { id } = req.body; 

        const deleteBlog = await Blog.findByIdAndDelete(id);
        
        // Failed deleting blog
        if(!deleteBlog) {
            return res.status(404).json({message: 'Blog not found', success: false});
        }
        
        // Successful deleting blog 
        return res.status(200).json({message: "Blog was deleted successfully", success: true }); 
    }

    catch(error) {
        console.log(error.message)
        res.status(500).json({message: 'Internal Server Error', success: false});
    }
}

export const showBlog = async(req, res) => {
    try {
        const { id } = req.body; 

        const showBlog = await Blog.findById(id); 

        // Failed showing blog data 
        if(!showBlog) {
            return res.status(404).json({message: "No blog to show", success: false});
        }

        // Successful showing blog data
        res.status(201).json({success: true,
            ...showBlog._doc
        });  
    }

    catch(error) {
        console.log(error.message)
        res.status(500).json({message: 'Internal Server Error', success: false});
    }
}
