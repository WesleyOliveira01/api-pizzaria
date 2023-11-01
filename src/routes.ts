import { Router , Request, Response} from "express";
import { UserController } from "./controllers/User/userController/controller";
import { AuthController } from "./controllers/User/authController/auth";
import { DetailsController } from "./controllers/User/DetailsController/Details";
import { ValidateToken } from "./middlewares/validateToken";
import { CategoryController } from "./controllers/Category/CategoryController";
import {ListCategoryController} from './controllers/Category/ListCategorys'
import { ProductsController } from "./controllers/Product/controller";

import uploadmulter from '../config/multer'
import multer from "multer";

const upload = multer(uploadmulter.upload("../tmp"))

export const router = Router()


export const httpStatus = {
    Sucess:200,
    BadRequest:400,
    Unauthorized:401,
    Forbidden:403,
    NotFound:404,
    InternalServerError:500
}

router.get('/',(req:Request,res:Response) => {
    res.status(httpStatus.Sucess).json({message:'tudo certo com get'})
})

// User router


router.post('/auth',AuthController.handler)

router.post('/newUser',ValidateToken,UserController.handler)

router.get('/details',ValidateToken,DetailsController.handler)

// Category router

router.post('/newCategory',ValidateToken,CategoryController.handler)

router.get('/categorys',ValidateToken, ListCategoryController.handler)

// Product router

router.post('/newProduct',ValidateToken,upload.single('file'),ProductsController.handler)