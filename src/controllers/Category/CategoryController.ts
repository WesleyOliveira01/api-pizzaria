import {Request, Response} from 'express'
import { CategoryService } from '../../services/Category/CategoryService/Category'
import { httpStatus } from '../../routes'

export class CategoryController{
    static async handler(req:Request,res:Response){
        try {
            const { name } = req.body
            const newCategory = await CategoryService.execute(name)
            res.status(httpStatus.Sucess).json(newCategory)
        } catch (error) {
            res.status(httpStatus.InternalServerError).json({error:error.message})   
        }
    }
}