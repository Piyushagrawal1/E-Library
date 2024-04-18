import mongoose from "mongoose";
import { User } from './userTypes'

const usserSchema = new mongoose.Schema<User>({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

//export
export default mongoose.model<User>("User", usserSchema)