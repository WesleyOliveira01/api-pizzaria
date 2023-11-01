import { Request,Response,NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { httpStatus } from "../routes";

interface payload{
    sub:string
}

export async function ValidateToken(req:Request,res:Response,next:NextFunction) {
    const authToken = req.headers.authorization

    const [_,token] = authToken.split(' ')

    try {
       const {sub} = verify(token,process.env.JWT_SECRET) as payload
       req.user_id = sub
       next()
   } catch (error) {
    return res.status(httpStatus.Unauthorized).end()
   }

}