import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Feedback } from "../../entity/Feedback";

export const updateFeedbackRouter = Router();

// update por id
updateFeedbackRouter.put("/:id", async (req, res) => {

    const id = req.params.id;

    const feedbackData = req.body;
    //console.log(feedbackData);

    const repository = await AppDataSource.getRepository(Feedback)
    const feedback = await repository.findOneBy({
        id: +id
    });
    //console.log(feedback)

    if(feedback != null){
        if(feedbackData.score > 0){
            await repository.save({
                id: feedback.id,
                description: feedbackData.description,
                score: feedbackData.score,
            });
            console.log(feedbackData);
            res.send("Feedback updated");
        }
        else{
            console.log("Invalid score");
            res.send("Invalid score");
        }
    }
  else{
    console.log("No register found");
    res.send("No register found");
  }
});