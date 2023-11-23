import { Router } from "express";
import { Client } from "../../models/Client";
import { AppDataSource } from "../../../database/data-source";

export const searchClientRouter = Router();

// search por id
searchClientRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const client = await AppDataSource.getRepository(Client).findOneBy({
    id: +id
  });
  console.log(client)

  res.send(client);
});