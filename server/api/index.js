import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'

const app = express()
app.use(express.json())

dotenv.config()

const connect =async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URL,()=>console.log("connected to mongoDB"))
    } catch (error) {
      throw error      
    }
}

mongoose.connection.on('disconnected',()=>{console.log('mongoDB disconnected')})

app.get('/',(req,res)=>{
    res.send('homepage')
})

// middlewares
app.use('/api/auth',authRoute)
app.use('/api/users',usersRoute)
app.use('/api/hotels',hotelsRoute)
app.use('/api/rooms',roomsRoute)

const PORT=process.env.PORT  || 8080

app.listen(PORT,()=>{
    connect()
    console.log(`listening to port ${PORT}`)})