import { Router } from "express";
import { Client } from "../../entity/Client";
import { AppDataSource } from "../../data-source";

export const searchClientRouter = Router();

searchClientRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const client = await AppDataSource.getRepository(Client).findOneBy({
    id: +id
  });
  console.log(client)

  res.send(client);
});