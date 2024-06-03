import { validateOrReject } from "class-validator";
import { CreateProductDto, UpdateProductDto } from "src/dto/product.dto";
import { Product } from "src/entities/Product.entity";
import { Repository, getRepository } from "typeorm";

export class ProductService {
    private productRepository: Repository<Product>;

    constructor(){
        this.productRepository = getRepository(Product);
    }

    async createProduct(productDto: CreateProductDto){
        await validateOrReject(productDto);

        const newProduct = this.productRepository.create(productDto);

        return await this.productRepository.save(newProduct);
    }

    async getAllProducts(){
        return await this.productRepository.find();
    }

    async getProductById(id: string){
        const product = await this.productRepository.findOne({where: {id}});

        if(!product){
            throw new Error(`Product with ID ${id} not found`);
        }

        return product;
    }

    async updateProduct(id: string, productDto: UpdateProductDto){
        await validateOrReject(productDto);
        const updatedProduct = await this.productRepository.update(id, productDto);

        return updatedProduct 
    }

    async deleteProduct(id: string): Promise<void> {
        await this.productRepository.delete(id);

        return console.log("Produto excluído com sucesso!");
    }
}