import { Request, Response } from "express";
import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { ProductService } from "../services/product/product.service";

export class ProductController {
    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
        console.log("ProductService instance created:", this.productService instanceof ProductService);

        this.createProduct = this.createProduct.bind(this);
        this.getAllProducts = this.getAllProducts.bind(this);
        this.getProductById = this.getProductById.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    async createProduct(req: Request, res: Response): Promise<Response> {
        try {
            console.log("Chegou");
            console.log("Type of productService:", typeof(this.productService));
            console.log("ProductService instance:", this.productService);

            const productDto: CreateProductDto = req.body;
            console.log("Product DTO:", productDto);

            const newProduct = await this.productService.createProduct(productDto);
            console.log("New Product:", newProduct);

            return res.status(201).json(newProduct);
        } catch (error) {
            console.log("Foi pro catch");
            console.error("Error details:", error);
            return res.status(400).json({ message: error.message });
        }
    }

    async getAllProducts(req: Request, res: Response): Promise<Response> {
        try {
            const products = await this.productService.getAllProducts();

            return res.status(200).json(products);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getProductById(req: Request, res: Response): Promise<Response> {
        try {
            const product = await this.productService.getProductById(req.params.id);

            return res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateProduct(req: Request, res: Response): Promise<Response> {
        try {
            const productDto: UpdateProductDto = req.body;
            const updatedProduct = this.productService.updateProduct(req.params.id, productDto);

            return res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteProduct(req: Request, res: Response): Promise<Response>{
        try {
            await this.productService.deleteProduct(req.params.id);

            return res.status(200);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}