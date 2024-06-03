import { describe, it, expect } from '@jest/globals';
import { ProductService } from "./product.service";
import { CreateProductDto } from "src/dto/product.dto";
import { createConnection } from 'typeorm';
import { Product } from '../../entities/Product.entity';
import { Order } from '../../entities/Order.entity';
import { Costumer } from '../../entities/Costumer.entity';

//Para evitar informações inconsistentes no banco de dados real, os testes são realizados em um banco SQLite local
let connection: any;

beforeAll(async () => {
    connection = await createConnection({
        type: 'sqlite',
        database: ':memory:',
        entities: [Product, Order, Costumer],
        synchronize: true,
    });
});

afterAll(async () => {
    if (connection) {
        try {
            await connection.close();
        } catch (error) {
            console.error(error);
        }
    }
});

describe("Product Service", () => {
    let productService: ProductService;

    beforeEach(async () => {
        productService = new ProductService();
    });

    describe("Create product", () => {
        it("should create a new product", async () => {
            const productDto: CreateProductDto = { product_name: "Produto Teste", description: "Testando", price: 25.99 };
            const createdProduct = await productService.createProduct(productDto);
            expect(createdProduct).toBeDefined();
        });
    });

    describe("Get all products", () => {
        it("should get all products on database", async () => {
            const allProducts: Product[] = await productService.getAllProducts()
            console.log(allProducts);
            expect(allProducts).toBeDefined();
            expect(allProducts).toBeInstanceOf(Array);
        })
    })
});