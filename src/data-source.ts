import "reflect-metadata";
import { DataSource } from "typeorm";
import { Company } from "./entity/Company";
import { ClientOfferPermission } from "./entity/ClientOfferPermission";
import { Client } from "./entity/Client";
import { SuperAdmin } from "./entity/SuperAdmin";
import { Offer } from "./entity/Offer";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Company, ClientOfferPermission, Client, SuperAdmin, Offer],
  migrations: [],
  subscribers: [],
});
