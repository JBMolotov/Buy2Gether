import { Router } from "express";

import { createClientRouter } from "./clients/create";
import { updateClientRouter } from "./clients/update";
import { searchClientRouter } from "./clients/search";
import { searchAllClientRouter } from "./clients/searchAll";
import { deleteClientRouter } from "./clients/delete";
import { offersJoinedRouter } from "./clients/offersJoined";

import { createCompanyRouter } from "./companies/create";
import { updateCompanyRouter } from "./companies/update";
import { searchCompanyRouter } from "./companies/search";
import { searchAllCompanyRouter } from "./companies/searchAll";
import { deleteCompanyRouter } from "./companies/delete";
import { approvedNotRouter } from "./companies/approvedNot";
import { approvedRouter } from "./companies/approved";

import { createOfferRouter } from "./offers/create";
import { updateOfferRouter } from "./offers/update";
import { searchOfferRouter } from "./offers/search";
import { searchAllOfferRouter } from "./offers/searchAll";
import { deleteOfferRouter } from "./offers/delete";
import { joinOfferRouter } from "./offers/join";
import { clientsJoinedRouter } from "./offers/clientsJoined";

import { approveCompanyRouter } from "./superAdmin/approveCompany";

export const router = Router();

// client
router.use("/clients/create", createClientRouter);
router.use("/clients/update", updateClientRouter);
router.use("/clients/search", searchClientRouter);
router.use("/clients/searchAll", searchAllClientRouter);
router.use("/clients/delete", deleteClientRouter);
router.use("/clients/offersJoined", offersJoinedRouter);

// company
router.use("/companies/create", createCompanyRouter);
router.use("/companies/update", updateCompanyRouter);
router.use("/companies/search", searchCompanyRouter);
router.use("/companies/searchAll", searchAllCompanyRouter);
router.use("/companies/delete", deleteCompanyRouter);
router.use("/companies/approveNot", approvedNotRouter);
router.use("/companies/approved", approvedRouter);

// offer
router.use("/offers/create", createOfferRouter);
router.use("/offers/update", updateOfferRouter);
router.use("/offers/search", searchOfferRouter);
router.use("/offers/searchAll", searchAllOfferRouter);
router.use("/offers/delete", deleteOfferRouter);
router.use("/offers/join", joinOfferRouter);
router.use("/offers/clientsJoined", clientsJoinedRouter);

// super admin
router.use("/superAdmin/approveCompany", approveCompanyRouter);