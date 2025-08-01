import cloudinary from "../lib/CLOUDINARY.js";
import message from "../models/message.js";
import User from "../models/User.js";
import { io, userSocketMap } from "../server.js";

//all user except logged in
export const getUsersForSidebar = async ()=>{
    try {
        const userId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: userId}}).select("-password");

        //count no. of not seen messages
        const unseen = {}
        const promises = filteredUsers.map(async ()=>{
            const messages= await message.find({senderId: user._id, reiceiverId: userId, seen: false})
            if(messages.lenght> 0){
                unseen[user._id] = messages.lenght;
            }
        })
        await Promise.all(promises)
        res.json({seccess: true, user: filteredUsers, unseen})
    } catch (error) {
        console.log(error.message)
        res.json({seccess: false, error: error.message})

    }
}

// get all messages
export const getMessages = async(req, res)=>{
    try {
        const{ id: selectedUserId } = req.params;
        const myId = req.user._id;
        const messages = await message.find({
            $or: [
                {senderId: myId, reiceiverId: selectedUserId},
                {senderId: selectedUserId, reiceiverId: myId},
            ]
        })

        await message.updateMany({senderId: selectedUserId, reiceiverId: myId}, {seen: true});
        res.json({success: true, messages})
        

    } catch (error) {
            console.log(error.message)
        res.json({seccess: false, error: error.message})
    }
}

//api to mark message seen
export const markMessageAsSeen = async()=>{
    try {
        const { id }= req.params;
        await message.findByIdAndUpdate(id, {seen: true })
        res.json({success:true})
    } catch (error) {
        onsole.log(error.message)
        res.json({seccess: false, error: error.message})
    }
}

//send message
export const sendMassage = async (req,res )=>{
    try {
        const {text,image} = req.body;
        const reciverId = req.params.id;
        const senderId = req.user._id;

        let imageUrl;
        if(image){
            const uploadRespnse = await cloudinary.uploader.upload(image);
            imageUrl = uploadRespnse.secure_url;
        };

        const newMessage = await message.create({
            senderId,
            reciverId,
            text,
            image: imageUrl
        })
        //emit the new message to the receiver's socket
        const receiverSocketId = userSocketMap[reiceiverId];
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.json({success: true, newMessage});
    } catch (error) {
        onsole.log(error.message)
        res.json({seccess: false, error: error.message})
    }
}