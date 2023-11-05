import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Offer } from "../../entity/Offer";
import { Client } from "../../entity/Client";

export const joinOfferRouter = Router();

// offer -> id
// client -> id
// client joins offer with offerId and clientId
joinOfferRouter.put("/:offerId/:clientId", async (req, res) => {

    const offer = await AppDataSource.getRepository(Offer).findOneBy({
        id: +req.params.offerId
    });
    const client = await AppDataSource.getRepository(Client).findOneBy({
        id: +req.params.clientId
    });

    if(offer != null && client != null){
        await AppDataSource.createQueryBuilder()
            .relation(Offer, 'clients')
            .of(offer)
            .add(client);

        console.log("Client " + client.id + " joined offer " + offer.id);
        res.send("Client " + client.id + " joined offer " + offer.id);
    }
    else{
        console.log("Client or offer not registered");
        res.send("Client or offer not registered");
    }
});