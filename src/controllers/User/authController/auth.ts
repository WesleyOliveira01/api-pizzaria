import { Request,Response } from "express";
import { AuthService } from "../../../services/User/authService/auth";
import { httpStatus } from "../../../routes";

export class AuthController{
    static async handler(req:Request,res:Response){
        try {
            const authUser = await AuthService.execute({...req.body})
        res.status(httpStatus.Sucess).json({authUser})
        } catch (error) {
         res.status(httpStatus.InternalServerError).json({error:error.message})   
        }
    }
}