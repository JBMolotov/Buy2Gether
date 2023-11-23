import "reflect-metadata";
import { DataSource } from "typeorm";
import { Company } from "../app/models/Company";
import { Client } from "../app/models/Client";
import { SuperAdmin } from "../app/models/SuperAdmin";
import { Offer } from "../app/models/Offer";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Company, Client, SuperAdmin, Offer],
  migrations: [],
  subscribers: [],
});
