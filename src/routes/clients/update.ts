import { Router } from "express";
import { Client } from "../../entity/Client";
import { AppDataSource } from "../../data-source";
import { clientIsValid } from "../../utils/validation/validation";

export const updateClientRouter = Router();

updateClientRouter.put("/", async (req, res) => {
  const clientData = req.body;

  if(clientIsValid(clientData)){
    // const manager = AppDataSource.createEntityManager();
    const repository = AppDataSource.getRepository(Client)
    const client = await repository.findOneBy({
      cpf: clientData.cpf
    })
    console.log(client)
    console.log(clientData)

    // AppDataSource.createQueryBuilder().update(client)
    //   .set({name: clientData.name, email: clientData.email, password: clientData.password, adress: clientData.adress, phoneNumber: clientData.phoneNumber,})
    //   .where("id  :id").execute;

    //await manager.save(Client, client);
    res.send(clientData);
  }
});