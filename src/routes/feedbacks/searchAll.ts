import { Router } from "express";
import { Feedback } from "../../entity/Feedback";
import { AppDataSource } from "../../data-source";

export const searchAllFeedbackRouter = Router();

searchAllFeedbackRouter.get("/", async (req, res) => {
  const manager = AppDataSource.createEntityManager();
  const feedback = await manager.find(Feedback);

  res.send(feedback);
});