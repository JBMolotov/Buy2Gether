import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Company } from "../../entity/Company";

export const approveCompanyRouter = Router();

// approve company by id
approveCompanyRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const repository = AppDataSource.getRepository(Company);
    const company = await repository.findOneBy({
        id: +id
    });

    //console.log(company);

    if(company != null){
        console.log("Approved company");
        console.log(
            await repository.save({
                id: company.id,
                cpfCnpj: company.cpfCnpj,
                name: company.name,
                isApproved: true
            })
        );
        res.send("Approved company");
    }
    else{
        console.log("Invalid id");
        res.send("Invalid id");
    };
});