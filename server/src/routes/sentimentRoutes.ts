import express from "express";
import { sentimentAnalysis } from "../controllers/sentiment";


const router = express.Router();

router.get('/', sentimentAnalysis)

export default router;