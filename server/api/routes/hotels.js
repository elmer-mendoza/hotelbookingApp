import express from 'express'
import Hotel from '../model/Hotel.js'

const router = express.Router()

// CREATE
router.post('/',async(req,res)=>{
    
    const newHotel = new Hotel(req.body)
    console.log(newHotel)
    try {
        const saveHotel = await newHotel.save()
      
        console.log('hi '+saveHotel)
        res.status(200).json(saveHotel)
    } catch (error) {
      res.status(500).json(error)
    }
})

// UPDATE
// DELETE
// GET
// GET ALL
router.get('/',async(req,res)=>{
    console.log(Hotel)
    const data = await Hotel.find()
    res.json(data)
})


// router.post('/',async(req,res)=>{
//     try {
//       const data = await Hotel.create(req.body)
//       res.status(201).send(data)
       
//    } catch (error) {
//        console.log(error.message)
//    }
//    })


export default router