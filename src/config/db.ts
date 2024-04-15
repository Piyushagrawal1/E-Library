import mongoose from "mongoose";
import { config } from "./config";

export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("MONGODB connection SUCCESSFULLY");
        })
        mongoose.connection.on('error', (error) => {
            console.log("Error in connecting database", error);
        })
        await mongoose.connect(config.databaseUrl as string)
        // console.log("MONGODB connection SUCCESSFULLY");
    } catch (error) {
        console.log("MONGODB connection FAILEd ", error);
        process.exit(1)
    }
}