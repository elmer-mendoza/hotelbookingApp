import User from '../models/Users.js'
import { createError } from '../utils/error.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async(req,res,next) => {
    const salt =await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(req.body.password,salt)
    try {
        const newuser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        });
        await newuser.save()
        res.status(201).json('User has been created')
    } catch (error) {
        next(createError(500,"Something went wrong!"))
    }
} 
export const login = async (req,res,next) => {
    try {
        const user = await User.findOne({username:req.body.username});
        if(!user) return next(createError(404,"You are not authorized!"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password);
        if(!isPasswordCorrect) return next(createError(400,"Wrong username or password"));
       
        const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET)
        const {password,isAdmin,...otherDetails} = user._doc;
        
        res
        // .header('Access-Control-Allow-Credentials', true)
        .cookie('access_token',token,{httpOnly: true,maxAge:36000}) //add - csrfProtection and sameSite:'None',secure:true,maxAge: 36000
        .status(200)
        // .json(otherDetails);
        // .json(user._doc)
        .json(token)


    } catch (error) {
        next(createError(500,"Something went wrong!"))
    }
} 