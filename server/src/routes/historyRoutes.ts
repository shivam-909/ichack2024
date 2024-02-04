import express from "express";
import { priceRoute, allocationsRoute, actualEmissionsRoute } from "../controllers/history";

const router = express.Router();

router.get('/price', priceRoute)
router.get('/allocations', allocationsRoute)
router.get('/actualEmissions', actualEmissionsRoute)

export default router;