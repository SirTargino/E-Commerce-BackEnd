import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order.entity";

@Entity('products')
export class Product {
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

    @ManyToMany(() => Order, order => order.products)
    orders: Order[];
}