import { Router } from "express";
import { Feedback } from "../../entity/Feedback";
import { AppDataSource } from "../../data-source";

export const searchByOfferFeedbackRouter = Router();

// search por offerId
searchByOfferFeedbackRouter.get("/:offerId", async (req, res) => {
    const feedbacks = await AppDataSource.getRepository(Feedback).findBy({
        offerId: +req.params.offerId
    });
    //console.log(feedbacks);
    res.send(feedbacks);
});