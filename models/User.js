import  mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["student", "teacher"],
        default: "student"
    }
     
}) 
 
export default mongoose.model("User", userSchema);
// This code defines a Mongoose schema for a User model in a MongoDB database.