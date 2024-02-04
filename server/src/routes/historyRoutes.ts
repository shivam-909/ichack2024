import express from "express";
import { priceRoute } from "../controllers/history";

const router = express.Router();

router.get('/', priceRoute)

export default router;