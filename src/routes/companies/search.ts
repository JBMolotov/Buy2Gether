import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Company } from "../../entity/Company";

export const searchCompanyRouter = Router();

// search por id
searchCompanyRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const company = await AppDataSource.getRepository(Company).findOneBy({
    id: +id,
  });
  console.log(company);

  res.send(company);
});

searchCompanyRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  const client = await AppDataSource.getRepository(Company).findOneBy({
    email,
    password,
  });
  console.log(client);

  res.send(client);
});
