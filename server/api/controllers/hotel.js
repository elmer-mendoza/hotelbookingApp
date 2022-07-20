
import Hotel from '../models/Hotel.js'
import { createError } from '../utils/error.js'


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
    const {min,max,...others} = req.query
    const key=(Object.keys(req.query))[0]
    const keyValue =(Object.values(req.query))[0]
    const value = ((keyValue  === "true") || (keyValue  === "false")) ?  Boolean(keyValue) : String(keyValue)

    try {
       const hotels = await Hotel.aggregate(
        [
            {$match:{
                [key]:value,
                cheapestPrices:{$gte:Number(min),$lte:Number(max)}
            }
            }
        ]
       )
     res.status(200).json(hotels.slice(0,4))
    } catch (error) {
        next(createError(500,"Something went wrong"))
    }
}

export const countByCity = async(req,res,next)=>{
    const key=(Object.keys(req.query))[0]
    const keyValue =(Object.values(req.query))[0]
    const value = ((keyValue  === "true") || (keyValue  === "false")) ?  Boolean(keyValue) : String(keyValue)

    try {
       const hotels = await Hotel.aggregate(
        [
            {$match:{[key]:value}},
            {$group:{
                _id:"$city",
                count:{$count:{}}
                }
            },
            {$sort:{count:-1}}
        ]
      )
     res.status(200).json(hotels.slice(0,3))
    } catch (error) {
        next(createError(500,"Something went wrong"))
    }
}

export const countByType = async(req,res,next)=>{
    let types = {
        hotel:0,
        apartment:0,
        resort:0,
        villa:0,
        cabin:0
     }

  try {
    const propertyTypeCount = await Hotel.aggregate(
        [
            {$match:{}},
            {$group:{
                _id:"$type",
                count:{$count:{}}
                }
            }
        ]
      )
       propertyTypeCount.map(type=>{
        types[type._id]=type.count
       })

      const updatedPropertyTypeCount ={...types}

     res.status(200).json(updatedPropertyTypeCount )

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