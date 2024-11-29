import mongoose from "mongoose";
import { ENV_VARS } from "./Env.js";

export const connectDB = async () => {
    try {
        const mongoDBCon = await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log("MongoDB connected successfully", mongoDBCon.connection.host);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}