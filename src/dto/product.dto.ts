import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateProductDto{
    @IsString()
    @IsNotEmpty({message: "O nome do produto não pode ser vazio!"})
    product_name: string;

    @IsString()
    @IsNotEmpty({message: "A descrição não pode ser vazia!"})
    description: string;

    @IsNumber()
    @Min(0)
    price: number;
}

export class UpdateProductDto{
    @IsString()
    product_name?: string;

    @IsString()
    description?: string;

    @IsNumber()
    @Min(0)
    price?: number;
}