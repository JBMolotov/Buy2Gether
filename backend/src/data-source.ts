import "reflect-metadata"
import { DataSource } from "typeorm"
import { Vendedor } from "./entity/Vendedor"
import { Grupo } from "./entity/Grupo"
import { Cliente } from "./entity/Cliente"
import { SuperAdmin } from "./entity/SuperAdmin"
import { Oferta } from "./entity/Oferta"
import { Historico } from "./entity/Historico"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Vendedor, Grupo, Cliente, SuperAdmin, Oferta, Historico],
    migrations: [],
    subscribers: [],
})
