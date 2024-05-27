import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  url: String(process.env.DB_URL),
  migrations: []
});

export default AppDataSource;