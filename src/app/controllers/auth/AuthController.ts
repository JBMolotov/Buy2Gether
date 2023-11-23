import { Request, Response } from "express";
import { Client } from "../../models/Client";
import { AppDataSource } from "../../../database/data-source";
import { createClientRouter } from "../../routes/clients/create";

class AuthController{
  async store(req: Request, res: Response){
    const repository = AppDataSource.getRepository(Client);
    const {name, cpf, email, password, adress, phoneNumber} = req.body;

    const emailExists = await repository.findOne({where: email})
    const cpflExists = await repository.findOne({where: cpf})

    if(cpflExists || emailExists) return res.sendStatus(409);

    const client = new Client(name, cpf, email, password, adress, phoneNumber)
    repository.create({name, cpf, email, password, adress, phoneNumber})
    await repository.save(client)
    await createClientRouter()

    return res.json(client);
  }
}

export default new ClientController();