
import {Request,Response} from 'express'
import { DetailsService } from '../../../services/User/DetailsService/Details'
import { httpStatus } from '../../../routes'

export class DetailsController{
    static async handler(req:Request,res:Response){
        try {
            const id = req.user_id
        const details = await DetailsService.execute(id)
        res.status(httpStatus.Sucess).json(details)
        
        } catch (error) {
            res.status(httpStatus.InternalServerError).json({error:error.message})
        }
    }
}