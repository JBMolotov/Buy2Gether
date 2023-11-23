import { Router } from "express";
import { AppDataSource } from "../../../database/data-source";
import { Offer } from "../../models/Offer";

export const searchAllOfferRouter = Router();

searchAllOfferRouter.get("/", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const offers = await manager.find(Offer);

  res.send(offers);
});