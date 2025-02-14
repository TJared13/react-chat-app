import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id; //req from protectRoute middleware
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password"); //find all users except the logged in user

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("error in user controller", error.message);
        res.status(500).json({error: "internal server error"});
    }
};