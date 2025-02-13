import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "./utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        //CHECK PASSWORD MATCH
        if (password !== confirmPassword) {
            return res.status(400).json({error: "Passwords do not match"});
        }

        //CHECK IF USER EXISTS
        const user = await User.findOne({username});
        if (user) {
            return res.status(400).json({error: "User already exists"});
        }

        //HASH PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //DEFAULT PROFILE PIC
        const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

        const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? maleProfilePic : femaleProfilePic,
        });

        if(newUser){
            //generate jwt token
            await generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        });
        } else {
            res.status(400).json({error: "invalid user data"});
        }
        
    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const login = async (req, res) => {
    console.log("login");
}

export const logout = async (req, res) => {
    console.log("logout");
}

