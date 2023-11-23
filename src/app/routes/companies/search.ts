import { Router } from "express";
import { AppDataSource } from "../../../database/data-source";
import { Company } from "../../models/Company";

export const searchCompanyRouter = Router();

// search por id
searchCompanyRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const company = await AppDataSource.getRepository(Company).findOneBy({
    id: +id
  });
  console.log(company)

  res.send(company);
});