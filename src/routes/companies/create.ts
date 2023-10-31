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
  const company = await AppDataSource.getRepository(Company).findOneBy({
    cpfCnpj: companyData.cpfCnpj
  });

  if(company === null){ // nao tem empresa cadastrada com esse cpf/cnpj
    // verifica se dados sao validos
    if(companyIsValid(companyData)){
      const newCompany = manager.create(Company, companyData);
      await manager.save(Company, newCompany);
      console.log("Company sent to approval");
      console.log(newCompany);
      res.send("Company sent to approval");
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
});