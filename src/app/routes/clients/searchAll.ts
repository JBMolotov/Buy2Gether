import { Router } from "express";
import { Client } from "../../models/Client";
import { AppDataSource } from "../../../database/data-source";

export const searchAllClientRouter = Router();

searchAllClientRouter.get("/", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const clients = await manager.find(Client);

  res.send(clients);
});