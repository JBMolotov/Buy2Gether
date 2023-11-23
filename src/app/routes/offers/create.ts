import { Router } from "express";
import { AppDataSource } from "../../../database/data-source";
import { offerIsValid } from "../../utils/validation/validation";
import { Offer } from "../../models/Offer";

export const createOfferRouter = Router();

createOfferRouter.post("/", async (req, res) => {
    const manager = AppDataSource.createEntityManager();
    const offerData = req.body;

    if(offerIsValid(offerData)){
        const newOffer = manager.create(Offer, offerData);
        await manager.save(Offer, newOffer);
        console.log("Registered offer");
        console.log(newOffer);
        res.send("Registered offer");
    }
    else{
        console.log("Invalid data");
        res.send("Invalid data");
    };
});