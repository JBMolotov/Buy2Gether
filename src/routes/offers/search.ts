import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Offer } from "../../entity/Offer";

export const searchOfferRouter = Router();

searchOfferRouter.get("/:entity/:id", async (req, res) => {
  const entity = req.params.entity;
  const id = req.params.id;

  if (entity == "offer" || entity == "company") {
    switch (entity) {
      // search por id
      case "offer":
        const offer = await AppDataSource.getRepository(Offer).findBy({
          id: +id,
        });
        console.log(offer);
        res.send(offer[0]);
        break;

      // search por companyId
      case "company":
        const offers = await AppDataSource.getRepository(Offer).findBy({
          companyId: +id,
        });
        console.log(offers);
        res.send(offers);
        break;
    }
  } else {
    console.log("Missing parameter on route");
    res.send("Missing parameter on route");
  }
});
