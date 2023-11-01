import { Request, Response } from "express";
import { httpStatus } from "../../routes";
import { ProductService } from "../../services/Product/Service";

export class ProductsController {
  static async handler(req: Request, res: Response) {
    try {
      const {filename} = req.file;
      const data = {
        ...req.body,
        banner:filename,
      };
      const newProduct = await ProductService.execute({ ...data });
      res.status(httpStatus.Sucess).json(newProduct);
    } catch (e) {
      res.status(httpStatus.InternalServerError).json({ error: e.message });
    }
  }
}
