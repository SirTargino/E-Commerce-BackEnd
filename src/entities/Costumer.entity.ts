import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order.entity";

@Entity('costumers')
export class Costumer{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        nullable: false,
        length: 100
    })
    name: string;
    
    @Column({
        nullable: false,
    })
    email: string;

    @Column({
        nullable: false,
        length: 14
    })
    phone: string;
    
    @Column({
        nullable: false
    })
    password: string;

    @Column({
        nullable: false,
        length: 9
    })
    cep: string;

    @Column({
        nullable: false,
    })
    street: string;

    @Column({
        nullable: false,
    })
    complement: string;

    @OneToMany(()=> Order, order => order.costumer)
    orders: Order[];
}