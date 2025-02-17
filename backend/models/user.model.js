import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
    },
    lastName: {
        type:String,
        required:true,
    },
    username: {
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type:String,
        required:true,
        minlength:6,
    },
    gender: {
        type:String,
        required: false,
        enum:["male", "female", "other"],
    },
    profilePic: {
        type:String,
        default:"",

    }
}, {timestamps:true}); //timestamps will automatically add createdAt and updatedAt fields ("member since <createdAt>")

const User = mongoose.model("User", userSchema);

export default User;