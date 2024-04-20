import express from "express";
import {
  getInsightByID,
  getInsights,
} from "../controllers/Insight.controller.js";

const router = express.Router();

router.get("/", getInsights);
router.get("/:id", getInsightByID);

export default router;
