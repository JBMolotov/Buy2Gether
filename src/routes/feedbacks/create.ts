import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Feedback } from "../../entity/Feedback";


export const createFeedbackRouter = Router();

createFeedbackRouter.post("/:companyId/:clientId/:offerId", async (req, res) => {

    const manager = AppDataSource.createEntityManager();
    const feedbackData = req.body;

    if(feedbackData != null){
        const newFeedback = manager.create(Feedback, feedbackData);
        newFeedback.companyId = +req.params.companyId;
        newFeedback.offerId = +req.params.offerId;
        newFeedback.clientId = +req.params.clientId;
        await manager.save(Feedback, newFeedback);
        console.log("Registered Feedback");
        console.log(newFeedback);
        res.send("Registered Feedback");
    }
    else{
        console.log("Invalid data");
        res.send("Invalid data");
    };
});