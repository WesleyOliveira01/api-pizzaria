import { db } from "../../prisma/db";

export class CategoryService{
    static async execute(name:string){
        if(!name) throw new Error("Name is required");
        const hasCategory = await db.category.findFirst({where:{name:name}})
        if(hasCategory) throw new Error("Category already exist");
        
        const category = await db.category.create({data:{name:name},select:{id:true,name:true}})
        return category
    }
}