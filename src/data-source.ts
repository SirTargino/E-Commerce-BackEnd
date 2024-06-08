import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Costumer } from './entities/Costumer.entity';
import { Order } from './entities/Order.entity';
import { Product } from './entities/Product.entity';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  url: String(process.env.DB_URL),
  synchronize: false,
  logging: true,
  migrations: ["./migrations/*.ts"],
  entities: [Costumer, Order, Product]
});

export default AppDataSource;