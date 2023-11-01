import { db } from "../../prisma/db";

export class ListCategoryService{
    static async execute(){
        const allCategorys = await db.category.findMany({select:{name:true,id:true}})
        return allCategorys
    }
}