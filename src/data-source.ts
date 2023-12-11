import "reflect-metadata";
import { DataSource } from "typeorm";
import { Company } from "./entity/Company";
import { Client } from "./entity/Client";
import { SuperAdmin } from "./entity/SuperAdmin";
import { Offer } from "./entity/Offer";
import dotenv from "dotenv";
import { Feedback } from "./entity/Feedback";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Company, Client, SuperAdmin, Offer, Feedback],
  migrations: [],
  subscribers: [],
});
