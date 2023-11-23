import { Router } from "express";
import { AppDataSource } from "../../../database/data-source";
import { Company } from "../../models/Company";

export const approvedNotRouter = Router();

approvedNotRouter.get("/", async (req, res) => {
    const companies = await AppDataSource.getRepository(Company).findBy({
        isApproved: false
    });
    //console.log(companies);
    res.send(companies);
});