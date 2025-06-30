

import express from "express";
const router = express.Router();

import { getMyAssignment } from "../controllers/studentController.js";


router.get("/assignments/:id", getMyAssignment);

export default router;