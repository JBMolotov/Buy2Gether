import { Router } from "express";
import { AppDataSource } from "../../data-source";
import { Feedback } from "../../entity/Feedback";

export const deleteFeedbackRouter = Router();

// delete por id
deleteFeedbackRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Feedback)
    .where("id = :id", { id: +id })
    .execute();
  console.log("Feedback deleted");
  res.send("Feedback deleted");
});