import { Router } from "express";
import { Client } from "../../entity/Client";
import { AppDataSource } from "../../data-source";
import { clientIsValid } from "../../utils/validation/validation";

export const searchClientRouter = Router();

searchClientRouter.get("/", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const id = req.params;

  const repository = AppDataSource.getRepository(Client)
  const client = await repository.findOneBy({
     id: +id
  })
  console.log(client)

    // AppDataSource.createQueryBuilder().update(client)
    //   .set({name: clientData.name, email: clientData.email, password: clientData.password, adress: clientData.adress, phoneNumber: clientData.phoneNumber,})
    //   .where("id  :id").execute;

    //await manager.save(Client, client);
  res.send(client);

  // const client = await Client.findOneBy({
  //   cpf: ,
  // })

  // if(clientIsValid(clientData)){
  //   const client = manager.create(Client, clientData);
    
  //   await manager.save(Client, client);
  //   res.send(client);
  // }

  //res.send("Erro")
});