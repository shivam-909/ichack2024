import express from "express";
import { testRoute } from "../controllers/carbon";

const router = express.Router();

router.get('/', testRoute)

export default router;