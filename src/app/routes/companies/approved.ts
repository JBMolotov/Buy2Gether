import { Router } from "express";
import { AppDataSource } from "../../../database/data-source";
import { Company } from "../../models/Company";

export const approvedRouter = Router();

approvedRouter.get("/", async (req, res) => {
    const companies = await AppDataSource.getRepository(Company).findBy({
        isApproved: true
    });
    //console.log(companies);
    res.send(companies);
});