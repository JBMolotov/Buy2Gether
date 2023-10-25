import { Router } from "express";
import { Client } from "../../entity/Client";
import { AppDataSource } from "../../data-source";
import { clientIsValid } from "../../utils/validation/validation";

export const searchCompanyRouter = Router();

searchCompanyRouter.get("/", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const cpf = req.params;

  // const client = await Client.findOneBy({
  //   cpf: ,
  // })

  // if(clientIsValid(clientData)){
  //   const client = manager.create(Client, clientData);
    
  //   await manager.save(Client, client);
  //   res.send(client);
  // }

  // //res.send("Erro")
});