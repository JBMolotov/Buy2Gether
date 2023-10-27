import { Router } from "express";
import { Client } from "../../entity/Client";
import { AppDataSource } from "../../data-source";
import { clientIsValid } from "../../utils/validation/validation";

export const createClientRouter = Router();

createClientRouter.post("/", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const clientData = req.body;

  // busca se ja tem cliente cadastrado com esse cpf 
  // se tiver, retorna cliente
  // se nao tiver, retorna nulo
  const c = await AppDataSource.getRepository(Client).findOneBy({
    cpf: clientData.cpf
  });

  if(c === null){ // nao tem cliente cadastrado com esse cpf
    // verifica se dados sao validos
    if(clientIsValid(clientData)){
      const client = manager.create(Client, clientData);
      await manager.save(Client, client);
      res.send(client);
    }
    else{
      console.log("Invalid data");
      res.send("Invalid data");
    };
  }
  else{ // ja tem cliente cadastrado com esse cpf
    console.log("CPF already registred");
    res.send("CPF already registred");
  };

  //res.send("Erro")
});