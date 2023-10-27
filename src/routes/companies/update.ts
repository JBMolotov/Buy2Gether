import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Company } from "../../entity/Company";
import { companyIsValid } from "../../utils/validation/validation";

export const updateCompanyRouter = Router();

// update por cpf/cnpj
updateCompanyRouter.put("/", async (req, res) => {
  const companyData = req.body;
  //console.log(companyData);

  const repository = await AppDataSource.getRepository(Company)
  const company = await repository.findOneBy({
    cpfCnpj: companyData.cpfCnpj
  });
  //console.log(company)

  if(company != null){
    if(companyIsValid(companyData)){
      await repository.save({
        id: company.id,
        cpfCnpj: companyData.cpfCnpj,
        name: companyData.name,
        email: companyData.email,
        password: companyData.password,
        address: companyData.address,
        fieldOfActivity: companyData.fieldOfActivity
      });
      res.send(companyData);
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