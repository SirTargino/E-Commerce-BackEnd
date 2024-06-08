import { validateOrReject } from "class-validator";
import { CreateProductDto, UpdateProductDto } from "../../dto/product.dto";
import { Product } from "../../entities/Product.entity";
import { EntityManager } from "typeorm";
import AppDataSource from "../../data-source";

export class ProductService {
    private productManager: EntityManager;
    constructor() {
        this.productManager = AppDataSource.manager;
    }

    async createProduct(productDto: CreateProductDto) {
        console.log("chamou o serviço")
        await validateOrReject(productDto);

        const newProduct = this.productManager.create(Product, productDto);

        return this.productManager.save(newProduct);
    }

    async getAllProducts() {
        return this.productManager.find(Product);
    }

    async getProductById(id: string) {
        const product = await this.productManager.findOne(Product, { where: { id } });

        if (!product) {
            throw new Error(`Product with ID ${id} not found`);
        }

        return product;
    }

    async updateProduct(id: string, productDto: UpdateProductDto) {
        await validateOrReject(productDto);
        const updatedProduct = await this.productManager.update(Product, id, productDto);

        return updatedProduct;
    }

    async deleteProduct(id: string): Promise<void> {
        await this.productManager.delete(Product, id);

        return console.log("Produto excluído com sucesso!");
    }
}