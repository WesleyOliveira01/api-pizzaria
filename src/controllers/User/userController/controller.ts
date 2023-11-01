import { Request, Response } from "express";
import { UserService } from "../../../services/User/UserService/service";
import { httpStatus } from "../../../routes";

export class UserController{
    static async handler(req:Request,res:Response){
        try {
            const newUser = await UserService.execute({...req.body})
            res.status(httpStatus.Sucess).json(newUser)
        } catch (error) {
            res.status(httpStatus.InternalServerError).json({error:error.message})
        }
    }
}