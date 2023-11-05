import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Offer } from "../../entity/Offer";

export const deleteOfferRouter = Router();

// TODO: resolver o problema do delete

// delete por id
deleteOfferRouter.delete("/:id", async (req, res) => {
    
    await AppDataSource.getRepository(Offer).save({
       id: +req.params.id,
       deletedAt: new Date()
    });
    
    console.log("Offer deleted");
    res.send("Offer deleted");
});