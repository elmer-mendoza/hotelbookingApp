import User from '../models/Users.js'
import { createError } from '../utils/error.js'


export const getUser = async(req,res,next)=>{
  try {
     const id = req.params.id
     const user = await User.findById(id)
     res.status(200).json(user)
 } catch (error) {
     next(createError(500,"Something went wrong"))
 }
}

export const getUsers = async(req,res,next)=>{
   
  try {
     const users = await User.find()
     res.status(200).json(users)
 } catch (error) {
     next(createError(500,"Something went wrong"))
 }
}

export const updatedUser = async(req,res,next)=>{
  try {
      const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {$set:req.body},
          {new:true}
      );
      res.status(200).json(updatedUser)
  } catch (error) {
      next(createError(500,"Something went wrong!"))
  }
}

export const deleteUser = async(req,res,next)=>{
  try {
     const id = req.params.id
     const user = await User.findByIdAndDelete(id)
     res.status(200).json("User has been deleted.")
 } catch (error) {
     next(createError(500,"Something went wrong"))
 }}