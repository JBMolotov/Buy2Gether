import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Company } from "../../entity/Company";
import { Offer } from "../../entity/Offer";
import { Feedback } from "../../entity/Feedback";

export const deleteCompanyRouter = Router();

// delete por id
deleteCompanyRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  // deleta os registros da oferta na tabela client_offer_permission
  // remove os clientes da oferta
  await AppDataSource.query('delete from client_offer_permission where offer_id = ' + +req.params.id);

  // deleta todas as offer da company
  await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Offer)
    .where({ companyId: +id })
    .execute();

  // deleta todos os feedbacks da company
  await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Feedback)
    .where({ companyId: +id })
    .execute();

  // deleta a company
  await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Company)
    .where("id = :id", { id: +id })
    .execute();

  console.log("Company deleted");
  res.send("Company deleted");
});