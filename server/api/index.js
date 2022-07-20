import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
// import session from 'express-session'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cors from 'cors'

const app = express()
app.use(cors({
    origin: ["http://localhost:8081"],
    credentials: true,
  }))
app.use(cookieParser())
app.use(express.json())

// app.set('trust proxy',1)

dotenv.config()

const connect =async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URL,()=>console.log("connected to mongoDB"))
    } catch (error) {
      throw error      
    }
}

mongoose.connection.on('disconnected',()=>{console.log('mongoDB disconnected')})

// app.use(session({
//     secret:"difficult to guest string",
//     cookie:{},
//     resave:false,
//     saveUninitialized:false
// }))

app.get('/',(req,res)=>{
    res.send('homepage')
})

// middlewares
app.use('/api/auth',authRoute)
app.use('/api/users',usersRoute)
app.use('/api/hotels',hotelsRoute)
app.use('/api/rooms',roomsRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
   
})

const PORT=process.env.PORT  || 8080

app.listen(PORT,()=>{
    connect()
    console.log(`listening to port ${PORT}`)})