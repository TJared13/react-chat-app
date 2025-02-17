import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { firstName, lastName, username, password, confirmPassword, gender } = req.body; //parsed from user.model.js
        
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
            firstName,
            lastName,
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
            firstName: newUser.firstName,
            lastName: newUser.lastName,
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
    try {
        const { username, password } = req.body; //GET INPUTS FROM USER
        const user = await User.findOne({username}); //FIND IF USER EXIST
        const isPasswordCorrect = await bcrypt.compare(password, user?.password) || ""; //CHECK PASSWORD MATCHES

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid username or password"});
        }
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    } catch (error) {
    console.log("error in login controller", error.message);
    res.status(500).json({error: "Internal server error"});
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        console.log("error in logout controller", error.message);
        res.status(500).json({error: "Internal server error"});
        
    }
}

