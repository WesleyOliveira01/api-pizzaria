import {Request,Response} from 'express'
import { httpStatus } from '../../routes'
import { ListCategoryService } from '../../services/Category/CategoryService/listCategorys'

export class ListCategoryController{
    static async handler(req:Request,res:Response){
        try {
            const allCategorys = await ListCategoryService.execute()
            res.status(httpStatus.Sucess).json(allCategorys)
        } catch (error) {
            res.status(httpStatus.InternalServerError).json({error:error.message})
        }
    }
}