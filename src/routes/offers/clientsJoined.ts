import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Offer } from "../../entity/Offer";

export const clientsJoinedRouter = Router();

// find all clients that have joined an offer 
clientsJoinedRouter.get("/:offerId", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const offer = await manager.getRepository(Offer).find({
    relations: {
        clients: true,
    },
    where: {
        id: +req.params.offerId,
    }
  });

  console.log(offer);
  res.send(offer);
});