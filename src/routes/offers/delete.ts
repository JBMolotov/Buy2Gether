import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Offer } from "../../entity/Offer";

export const deleteOfferRouter = Router();

// delete by id
deleteOfferRouter.delete("/:id", async (req, res) => {

    const registeredOffer = await AppDataSource.getRepository(Offer).findOneBy({
        id: +req.params.id
    });

    //console.log(registeredOffer);

    if(registeredOffer != null){
        // deleta os registros da oferta na tabela client_offer_permission
        // remove os cliente da oferta
        await AppDataSource.query('delete from client_offer_permission where offer_id = ' + +req.params.id);

        // atualiza os dados da oferta
        await AppDataSource.getRepository(Offer).save({
            id: +req.params.id,
            deletedAt: new Date(),
            isDeleted: true
        });

        console.log("Offer deleted");
        res.send("Offer deleted");
    }
    else{
        console.log("No offer found with given id");
        res.send("No offer found with given id");
    }
});