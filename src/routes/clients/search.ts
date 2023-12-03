import { Router } from "express";
import { Client } from "../../entity/Client";
import { AppDataSource } from "../../data-source";

export const searchClientRouter = Router();

// search por id
searchClientRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const client = await AppDataSource.getRepository(Client).findOneBy({
    id: +id,
  });
  console.log(client);

  res.send(client);
});

// login using email and password

searchClientRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  const client = await AppDataSource.getRepository(Client).findOneBy({
    email,
    password,
  });
  console.log(client);

  res.send(client);
});
