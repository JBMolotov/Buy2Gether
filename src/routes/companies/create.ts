import { Router } from "express";
import { Company } from "../../entity/Company";
import { AppDataSource } from "../../data-source";
import { companyIsValid } from "../../utils/validation/validation";

export const createCompanyRouter = Router();

createCompanyRouter.post("/", async (req, res) => {
  try {
    const manager = AppDataSource.createEntityManager();
    const companyData = req.body;

    // It's better to validate all fields of companyData here

    const existingCompany = await AppDataSource.getRepository(
      Company
    ).findOneBy({
      cpfCnpj: companyData.cpfCnpj,
    });

    if (existingCompany) {
      return res.status(409).json({ message: "CPF/CNPJ already registered" });
    }
    companyData.isApproved = true;
    const newCompany = manager.create(Company, companyData);
    await manager.save(Company, newCompany);
    return res
      .status(201)
      .json({ message: "Company sent to approval", company: newCompany });
  } catch (error) {
    console.error("Error in company registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
