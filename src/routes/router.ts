import { Router } from "express";
import { createClientRouter } from "./clients/create";
import { updateClientRouter } from "./clients/update";
import { searchClientRouter } from "./clients/search";
import { searchAllClientRouter } from "./clients/searchAll";
import { deleteClientRouter } from "./clients/delete";
import { createCompanyRouter } from "./companies/create";
import { updateCompanyRouter } from "./companies/update";
import { searchCompanyRouter } from "./companies/search";
import { searchAllCompanyRouter } from "./companies/searchAll";
import { deleteCompanyRouter } from "./companies/delete";

export const router = Router();

router.use("/clients/create", createClientRouter);
router.use("/clients/update", updateClientRouter);
router.use("/clients/search/{id}", searchClientRouter);
router.use("/clients/searchAll", searchAllClientRouter);
router.use("/clients/delete", deleteClientRouter);
router.use("/companies/create", createCompanyRouter);
router.use("/companies/update", updateCompanyRouter);
router.use("/companies/search/{id}", searchCompanyRouter);
router.use("/companies/searchAll", searchAllCompanyRouter);
router.use("/companies/delete", deleteCompanyRouter);