import express from "express";
import { priceRoute } from "../controllers/history";

const router = express.Router();

router.get('/price', priceRoute)

export default router;