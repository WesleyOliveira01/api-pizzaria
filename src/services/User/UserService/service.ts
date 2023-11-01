import { db } from "../../prisma/db";
import {hash} from 'bcryptjs'
type user = {
    name:string,
    email:string,
    password:string
}

export class UserService{
    static async execute({name,email,password}:user){
        if(!name) throw new Error("Name is required");
        if(!email) throw new Error("Email is required");
        if(!password) throw new Error("Password id required");
        const hasUser = await db.user.findFirst({where:{
            email:email
        }})
        if(hasUser) throw new Error("User already exists");

        const hasPassword = await hash(password,8)

        const newUser = await db.user.create({data:{
            name,
            email,
            password:hasPassword
        }})
        
        return newUser
    }
}