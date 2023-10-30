import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Company } from "../../entity/Company";

export const companiesToApproveRouter = Router();

companiesToApproveRouter.get("/", async (req, res) => {
    const companies = await AppDataSource.getRepository(Company).findBy({
        isApproved: false
    });
    //console.log(companies);
    res.send(companies);
});