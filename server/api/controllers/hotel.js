
import Hotel from '../models/Hotel.js'
import { createError } from '../utils/error.js'
import session from 'express-session'

export const createHotel = async(req,res,next)=>{
    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        next(createError(500,"Something went wrong"))
    }
}

export const getHotel = async(req,res,next)=>{
  try {
     const id = req.params.id
     const hotel = await Hotel.findById(id)
     res.status(200).json(hotel)
 } catch (error) {
     next(createError(500,"Something went wrong"))
 }
}

export const getHotels = async(req,res,next)=>{
  try {
     const hotels = await Hotel.find()

    // console.log(req.session)
    //  req.session.mendoza ="elmer"
    // console.log(req.session) 

     res.status(200).json(hotels)
 } catch (error) {
     next(createError(500,"Something went wrong"))
 }
}

export const updatedHotel = async(req,res,next)=>{
  try {
      const updatedHotel = await Hotel.findByIdAndUpdate(
          req.params.id,
          {$set:req.body},
          {new:true}
      );
      res.status(200).json(updatedHotel)
  } catch (error) {
      next(createError(500,"Something went wrong!"))
  }
}

export const deleteHotel = async(req,res,next)=>{
  try {
     const id = req.params.id
     const hotels = await Hotel.findByIdAndDelete(id)
     res.status(200).json("Hotel has been deleted.")
 } catch (error) {
     next(createError(500,"Something went wrong"))
 }
}