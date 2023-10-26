import { Router } from "express";
import { Client } from "../../entity/Client";
import { AppDataSource } from "../../data-source";

export const searchAllClientRouter = Router();

searchAllClientRouter.get("/", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const clients = await manager.find(Client);

  res.send(clients);
});