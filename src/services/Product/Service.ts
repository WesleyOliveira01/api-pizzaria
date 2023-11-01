import { db } from "../prisma/db";

interface Iproduct {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

export class ProductService {
  static async execute(product: Iproduct) {
    if (!product.name) throw new Error("Name is required");
    if (!product.price) throw new Error("Price is required");
    if (!product.description) throw new Error("Description is required");
    if (!product.banner) throw new Error("Banner is required");
    if (!product.category_id) throw new Error("Category id is required");

    const hasCategory = await db.category.findFirst({
      where: { id: product.category_id },
    });
    const hasProduct = await db.product.findFirst({where:{name:product.name}})
    if(hasProduct) throw new Error("Product already exist")
    if (!hasCategory) throw new Error("Category notfound");

    const newProduct = await db.product.create({
      data: { ...product },
      select: { name:true,price:true,description:true,banner:true },
    });
    return newProduct;
  }
}
