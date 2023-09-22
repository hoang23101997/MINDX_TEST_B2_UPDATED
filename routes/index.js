/** @format */

import express from "express";
import authRouter from "./auth.route.js";
import inventoryRouter from "./inventories.route.js";
import "dotenv/config";
import orderRouter from "./orders.route.js";

const router = express.Router();
router.use("/login", authRouter);
router.use("/inventory", inventoryRouter);
router.use("/orders", orderRouter);

export default router;
