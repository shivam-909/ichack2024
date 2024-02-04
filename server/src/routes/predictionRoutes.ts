import express from "express";
import { predictionAnalysis } from "../controllers/predition";


const router = express.Router();

router.get('/', predictionAnalysis)

export default router;