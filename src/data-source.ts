import "reflect-metadata";
import { DataSource } from "typeorm";
import { Company } from "./entity/Company";
import { ClientOfferPermission } from "./entity/ClientOfferPermission";
import { Client } from "./entity/Client";
import { SuperAdmin } from "./entity/SuperAdmin";
import { Offer } from "./entity/Offer";
import { Historic } from "./entity/Historic";
import { dbConfig } from "./dbConfig";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Company, ClientOfferPermission, Client, SuperAdmin, Offer, Historic],
  migrations: [],
  subscribers: [],
});
