import { db } from "../../prisma/db";

export class DetailsService{
    static async execute(id:string){
        const user = await db.user.findFirst({where:{id,},select:{id:true,email:true,created_at:true,updated_at:true}})
        if(!user) throw new Error("User not found");

        return user
        
    }
}