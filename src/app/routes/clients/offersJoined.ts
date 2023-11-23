import { Router } from "express";
import { AppDataSource } from "../../../database/data-source";
import { Client } from "../../models/Client";

export const offersJoinedRouter = Router();

// find all offers that a client has joined
offersJoinedRouter.get("/:clientId", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const client = await manager.getRepository(Client).find({
    relations: {
        offers: true,
    },
    where: {
        id: +req.params.clientId,
    }
  });

  console.log(client);
  res.send(client);
});