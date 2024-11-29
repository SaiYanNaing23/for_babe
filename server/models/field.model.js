import mongoose from "mongoose";

const fieldSchema = new mongoose.Schema({
    fields : {
        type: Array,
        default : [],
    }
})


export const Field = mongoose.model("Field", fieldSchema);