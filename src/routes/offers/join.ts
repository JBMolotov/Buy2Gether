import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Offer } from "../../entity/Offer";
import { Client } from "../../entity/Client";

export const joinOfferRouter = Router();

joinOfferRouter.put("/:offerId/:clientId", async (req, res) => {
  const offerId = +req.params.offerId;
  const clientId = +req.params.clientId;

  try {
    const offer = await AppDataSource.getRepository(Offer).findOneBy({
      id: offerId,
    });
    const client = await AppDataSource.getRepository(Client).findOneBy({
      id: clientId,
    });

    if (!offer || !client) {
      return res.status(404).send("Client or offer not registered");
    }

    // Check if the client is already joined
    const existingClient = await AppDataSource.createQueryBuilder()
      .relation(Offer, "clients")
      .of(offer)
      .loadMany();

    if (existingClient.find((c) => c.id === clientId)) {
      // Remove client from the offer
      await AppDataSource.createQueryBuilder()
        .relation(Offer, "clients")
        .of(offer)
        .remove(client);

      return res.send(
        "Client " + client.id + " removed from offer " + offer.id
      );
    } else {
      // Add client to the offer
      await AppDataSource.createQueryBuilder()
        .relation(Offer, "clients")
        .of(offer)
        .add(client);

      return res.send("Client " + client.id + " joined offer " + offer.id);
    }
  } catch (error) {
    console.error("Error joining offer: ", error);
    res.status(500).send("Internal Server Error");
  }
});
