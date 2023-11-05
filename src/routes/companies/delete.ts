import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Company } from "../../entity/Company";
import { Offer } from "../../entity/Offer";

export const deleteCompanyRouter = Router();

// delete por id
deleteCompanyRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  // update deleteAt from offer
  // update companyId from offer
  await AppDataSource
    .createQueryBuilder()
    .update(Offer)
    .set({ deletedAt: () => "CURRENT_TIMESTAMP", companyId: -1 })
    .where({ companyId: +id })
    .execute();

  // delete a company
  await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Company)
    .where("id = :id", { id: +id })
    .execute();

  console.log("Company deleted");
  res.send("Company deleted");
});