import { Router } from "express";
import { AppDataSource } from "../../../database/data-source";
import { Offer } from "../../models/Offer";
import { offerIsValid } from "../../utils/validation/validation";

export const updateOfferRouter = Router();

// update por id
updateOfferRouter.put("/:id", async (req, res) => {

    const id = req.params.id;

    const offerData = req.body;
    //console.log(offerData);

    const repository = await AppDataSource.getRepository(Offer)
    const offer = await repository.findOneBy({
        id: +id
    });
    //console.log(offer)

    if(offer != null){
        if(offerIsValid(offerData)){
            await repository.save({
                id: offer.id,
                name: offerData.name,
                updatedAt: new Date(),
                price: offerData.price,
                description: offerData.description,
                minimalForFreeDelivery: offerData.minimalForFreeDelivery,
                minimalForConsolidation: offerData.minimalForConsolidation,
                totalAmount: offerData.totalAmount,
                isPublic: offerData.isPublic,
                version: offer.version + 1
            });
            console.log(offerData);
            res.send(offerData);
        }
        else{
            console.log("Invalid data");
            res.send("Invalid data");
        }
    }
  else{
    console.log("No register found");
    res.send("No register found");
  }
});