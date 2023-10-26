import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Company } from "../../entity/Company";

export const searchCompanyRouter = Router();

searchCompanyRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const company = await AppDataSource.getRepository(Company).findOneBy({
    id: +id
  });
  console.log(company)

  res.send(company);
});