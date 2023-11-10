import { Router } from "express";
import { Client } from "../../entity/Client";
import { AppDataSource } from "../../data-source";
import { Feedback } from "../../entity/Feedback";

export const deleteClientRouter = Router();

// delete por id
deleteClientRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  // ao inves de deletar o feedback quando deletar o cliente
  // o feedback ainda vai existir, mas o id do cliente fica -1
  // quer dizer que a conta do cliente foi deletada
  await AppDataSource
    .createQueryBuilder()
    .update(Feedback)
    .set({ clientId: -1 })
    .where({ clientId: +id })
    .execute();

  await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Client)
    .where("id = :id", { id: +id })
    .execute();
  console.log("Client deleted");
  res.send("Client deleted");
});