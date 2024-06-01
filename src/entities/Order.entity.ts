import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Costumer } from "./Costumer.entity";
import { Product } from "./Product.entity";

@Entity('orders')
export class Order{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=> Costumer, costumer => costumer.orders)
    @JoinColumn({ name: 'customerId' })
    costumer: Costumer;

    @ManyToMany(()=> Product)
    @JoinTable({name: 'order_products'})
    products: Product[];

    @Column({
        nullable: false,
    })
    payment_method: string;

    //Apesar da tabela Costumer conter o endereço, a regra de negócio desse projeto permitirá que o cliente selecione outro endereço para a entrega do pedido, por exemplo, em caso de um presente. Porém, caso ele opte por receber em sua casa, haverá um botão no frontend que preencherá isso automaticamente.
    @Column({
        nullable: false,
    })
    delivery_adress: string;

    @Column({
        nullable: false
    })
    total_value: Number;
}