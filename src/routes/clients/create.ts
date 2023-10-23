import { Router } from "express";
import { Client } from "../../entity/Client";
import { AppDataSource } from "../../data-source";

export const createClientRouter = Router();

createClientRouter.post("/", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const clientData = req.body;

  const client = manager.create(Client, clientData);

  await manager.save(Client, client);

  res.send(client);
});
