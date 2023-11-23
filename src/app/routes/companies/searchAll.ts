import { Router } from "express";
import { Company } from "../../models/Company";
import { AppDataSource } from "../../../database/data-source";

export const searchAllCompanyRouter = Router();

searchAllCompanyRouter.get("/", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const company = await manager.find(Company);

  res.send(company);
});