import { Router } from "express";
import { createClientRouter } from "./clients/create";
import { createCompanyRouter } from "./companies/create";

export const router = Router();

router.use("/clients/create", createClientRouter);
router.use("/companies/create", createCompanyRouter);
