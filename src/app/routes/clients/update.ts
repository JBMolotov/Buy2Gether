import { Router } from "express";
import { Client } from "../../models/Client";
import { AppDataSource } from "../../../database/data-source";
import { clientIsValid } from "../../utils/validation/validation";

export const updateClientRouter = Router();

// update por cpf
updateClientRouter.put("/", async (req, res) => {

  const clientData = req.body;
  //console.log(clientData);

  const repository = await AppDataSource.getRepository(Client)
  const client = await repository.findOneBy({
    cpf: clientData.cpf
  });
  //console.log(client)

  if(client != null){
    if(clientIsValid(clientData)){
      await repository.save({
        id: client.id,
        cpf: clientData.cpf,
        name: clientData.name,
        email: clientData.email,
        password: clientData.password,
        address: clientData.address,
        phoneNumber: clientData.phoneNumber
      });
      res.send(clientData);
    }
    else{
      console.log("Invalid data");
      res.send("Invalid data");
    }
  }
  else{
    console.log("No register found");
    res.send("No register found");
  }
});