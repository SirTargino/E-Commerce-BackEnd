import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(String(process.env.db_url), {
  logging: false,
});

const connectToDatabase = async () => {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("Connection has been established successfully");
};

export { sequelize, connectToDatabase };