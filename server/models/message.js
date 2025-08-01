import { text } from "express";
import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
  senderId:{type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  reciverId:{type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  text: {type: String,},
  Image: {type: String,},
  seen: {type: Boolean, default: false}
},{timestamps: true});

const message= mongoose.model("message", messageSchema)

export default message;