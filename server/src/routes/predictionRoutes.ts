import express from "express";
import { carbonAllocation, predictionAnalysis } from "../controllers/predition";


const router = express.Router();

router.get('/prices', predictionAnalysis)
router.get('/allocation', carbonAllocation)

export default router;