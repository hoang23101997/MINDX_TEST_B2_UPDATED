import express from "express";
import ordersModel from "../models/orders.model.js";

import { authMiddleware } from "../middlewares/auth.middlewares.js";
const orderRouter = express.Router();

orderRouter.post("/import-orders", async (req, res) => {
  const orderData = [
    { _id: 1, item: "almonds", price: 12, quantity: 2 },
    { _id: 2, item: "pecans", price: 20, quantity: 1 },
    { _id: 3, item: "pecans", price: 20, quantity: 3 },
  ];
  try {
    ordersModel.insertMany(orderData);
    res.status(200).json({
      message: "Order data has been imported to database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
});
orderRouter.get("/", authMiddleware, (req, res) => {
  const { item } = req.body;
  console.log(item);
  ordersModel
    .find({ item: item })
    .then((data) => {
      res.status(200).json({
        msg: "Get orders successfully",
        data: data,
      });
      console.log(data);
    })
    .catch(() => {
      res.status(500).json({
        msg: "Internal server error",
        data: null,
      });
    });
});
export default orderRouter;
