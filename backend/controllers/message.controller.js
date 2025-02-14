import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}, //find conversation between sender and receiver
     });

     if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, receiverId],
        });
    }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

    if(newMessage){
        conversation.messages.push(newMessage._id);
    }

    //SOCKET.IO FUNCTIONALITY WILL GO HERE

    //RUNNING NEXT TWO LINES AS SO EXECUTES ONE FUNCTION AT A TIME
        // await conversation.save();
        // await newMessage.save();
        
    //THIS RUNS THE TWO FUNCTIONS AT THE SAME TIME
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);

    } catch (error) {
        console.log("error in sendMessage controller", error.message);
        res.status(500).json({error: "internal server error"});
    }
};

export const getMessages = async (req, res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id; //req from protectRoute middleware

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]},
        }).populate("messages"); //populate messages array with actual message objects, not just id's

        if (!conversation) return res.status(200).json([]);
        const messages = conversation.messages;

        res.status(200).json(messages)
        
    } catch (error) {
        console.log("error in getMessages controller", error.message);
        res.status(500).json({error: "internal server error"});
    }
};