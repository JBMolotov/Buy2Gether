import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Offer } from "../../entity/Offer";
import { Client } from "../../entity/Client";

export const deleteOfferRouter = Router();

// delete by id
deleteOfferRouter.delete("/:id", async (req, res) => {

    // deleta os registros da oferta na tabela client_offer_permission
    await AppDataSource.query('delete from client_offer_permission where offer_id = ' + +req.params.id);

    // atualiza os dados da oferta
    await AppDataSource.getRepository(Offer).save({
       id: +req.params.id,
       deletedAt: new Date(),
       isDeleted: true
    });

    console.log("Offer deleted");
    res.send("Offer deleted");
});