import { Router } from "express";
import { Feedback } from "../../entity/Feedback";
import { AppDataSource } from "../../data-source";

export const searchByClientFeedbackRouter = Router();

// search por clientId
searchByClientFeedbackRouter.get("/:clientId", async (req, res) => {
    const feedbacks = await AppDataSource.getRepository(Feedback).findBy({
        clientId: +req.params.clientId
    });
    //console.log(feedbacks);
    res.send(feedbacks);
});