import { db } from "../../prisma/db";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export class AuthService{
    static async execute({email,password}){
        const user = await db.user.findFirst({where:{email:email}})
        if(!user)throw new Error("email/password invalid")
        const validatePassword = compare(password,user.password)
        if(!validatePassword) throw new Error("email/password invalid")
        const token = sign(
        {
            name:user.name,
            email:user.email
        },
        process.env.JWT_SECRET,
        {
            subject:user.id,
            expiresIn:"30d"
        })
        return {
            id:user.id,
            name:user.name,
            email:user.email,
            token,
        }
    }
}