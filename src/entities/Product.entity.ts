import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        nullable: false,
        length: 100
    })
    product_name: string;

    @Column({
        nullable: false
    })
    description: string;

    @Column({
        nullable: false
    })
    price: number;
}