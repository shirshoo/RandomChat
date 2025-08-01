import express from "express";
import "dotenv/config";
import cors from 'cors';
import http from 'http';
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoute.js";
import { Server } from "socket.io";

// express with HTTP
const app = express();
const server = http.createServer(app)

//socket server
export const io = new Server(server,{
    cors: {origin: "*"}
})
//store online user
export const userSocketMap= {};//{iserId: socketId}

//socket.io connection handler
io.on("connectio",(socket)=>{
    const userId = socket.handshake.query.userId;
    console.log("user connected", userId);

    if(userId) userSocketMap[userId] = socket.id;
    //emit all online users to client
    io.emit("getOnlineUser", Object.keys(userSocketMap));

    socket.on("disconnect",()=> console.log("User Disconnected", userId));
    delete userSocketMap[userId];
    io.emit("getOnlineUser",Object.keys(userSocketMap))
})

//middle ware
app.use(express.json({limit: "4mb"}));
app.use(cors());

//route setup
app.use("/api/status", (req, res)=> res.send("server is live"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

//connect to mongoDB
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> console.log("server is running - " + PORT))