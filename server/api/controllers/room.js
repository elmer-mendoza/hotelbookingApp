import Room from "../models/Rooms.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createRoom = async(req,res,next) => {
    console.log(req.params)
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)
    try {
        const saveRoom = await newRoom.save()
        try {
             await Hotel.findByIdAndUpdate(hotelId,{$push : {rooms:saveRoom._id}})
        } catch (error) {
            next(error)
        }
    res.status(200)  .json(saveRoom) 
    } catch (error) {
        next(error)
    }
}

export const getRoom = async(req,res,next)=>{
    try {
       const id = req.params.id
       const room = await Room.findById(id)
       res.status(200).json(room)
   } catch (error) {
       next(createError(500,"Something went wrong"))
   }
  }
  
  export const getRooms = async(req,res,next)=>{
    try {
       const rooms = await Room.find()
       res.status(200).json(rooms)
   } catch (error) {
       next(createError(500,"Something went wrong"))
   }
  }
  
  export const updatedRoom = async(req,res,next)=>{
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
        );
        res.status(200).json(updatedRoom)
    } catch (error) {
        next(createError(500,"Something went wrong!"))
    }
  }
  
  export const deleteRoom = async(req,res,next)=>{
     console.log(req.params) 
    const hotelId = req.params.hotelid
    try {
       await Room.findByIdAndDelete(req.params.id)
       try {
        await Hotel.findByIdAndUpdate(hotelId,{$pull : {rooms:req.params.id}})
       } catch (error) {
       next(error)
       }
       res.status(200).json("Room has been deleted.")
   } catch (error) {
       next(error)
   }
  }