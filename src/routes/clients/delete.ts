import { Router } from "express";
import { Client } from "../../entity/Client";
import { AppDataSource } from "../../data-source";

export const deleteClientRouter = Router();

deleteClientRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Client)
    .where("id = :id", { id: +id })
    .execute();
  console.log("Client deleted");
  res.send("Client deleted");
});