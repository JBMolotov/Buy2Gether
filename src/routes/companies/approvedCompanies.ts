import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Company } from "../../entity/Company";

export const approvedCompaniesRouter = Router();

approvedCompaniesRouter.get("/", async (req, res) => {
    const companies = await AppDataSource.getRepository(Company).findBy({
        isApproved: true
    });
    //console.log(companies);
    res.send(companies);
});