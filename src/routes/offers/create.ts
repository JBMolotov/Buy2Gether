import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { offerIsValid } from "../../utils/validation/validation";
import { Offer } from "../../entity/Offer";

export const createOfferRouter = Router();

createOfferRouter.post("/:companyId", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const offerData = req.body;

  if (offerIsValid(offerData)) {
    const newOffer = manager.create(Offer, offerData);
    newOffer.companyId = +req.params.companyId;
    await manager.save(Offer, newOffer);
    console.log("Registered offer");
    console.log(newOffer);
    res.json({ offerId: newOffer.id });
  } else {
    console.log("Invalid data");
    res.send("Invalid data");
  }
});
