import { Router } from "express";
import { Company } from "../../entity/Company";
import { AppDataSource } from "../../data-source";

export const createCompanyRouter = Router();

createCompanyRouter.post("/", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const companyData = req.body;

  const company = manager.create(Company, companyData);

  await manager.save(Company, company);

  res.send(company);
});
