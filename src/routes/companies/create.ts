import { Router } from "express";
import { Company } from "../../entity/Company";
import { AppDataSource } from "../../data-source";
import { companyIsValid } from "../../utils/validation/validation";

export const createCompanyRouter = Router();

createCompanyRouter.post("/", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const companyData = req.body;

  // busca se ja tem empresa cadastrado com esse cpf/cnpj 
  // se tiver, retorna empresa
  // se nao tiver, retorna nulo
  const c = await AppDataSource.getRepository(Company).findOneBy({
    cpfCnpj: companyData.cpfCnpj
  });

  if(c === null){ // nao tem empresa cadastrada com esse cpf/cnpj
    // verifica se dados sao validos
    if(companyIsValid(companyData)){
      const company = manager.create(Company, companyData);
      await manager.save(Company, company);
      res.send(company);
    }
    else{
      console.log("Invalid data");
      res.send("Invalid data");
    };
  }
  else{ // ja tem empresa cadastrado com esse cpf
    console.log("CPF/CNPJ already registred");
    res.send("CPF/CNPJ already registred");
  };
  //res.send("Erro")
});