import { createError } from "./error.js";
import jwt from 'jsonwebtoken';



export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;
    if (!token) return {status:401 ,message:"You are not authorized!"};

    const verify = jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return {status:401 ,message:"Invalid token!"};
        req.user=user
    })
    return verify
  };
  
  export const verifyUser = (req, res, next) => {
    const {status,message}= verifyToken(req,res,next) || {status:403 ,message:"You are not authorized!!"};
    if (req.user?.id === req.params?.id || req.user.isAdmin) {
        console.log("You can now update or delete")
        next()
    }
    else  return next(createError(status,message));
  };
  
  export const verifyAdmin = (req, res, next) => {
    const {status,message}= verifyToken(req,res,next) || {status:403 ,message:"You are not authorized!!"};
    if (req.user?.isAdmin) {
        console.log("You are logged in as an Admin")
        next()
    }
    else  return next(createError(status,message));
  };

  
  
