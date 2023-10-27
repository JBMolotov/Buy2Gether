import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Company } from "../../entity/Company";

export const deleteCompanyRouter = Router();

// delete por id
deleteCompanyRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Company)
    .where("id = :id", { id: +id })
    .execute();
  console.log("Company deleted");
  res.send("Company deleted");
});