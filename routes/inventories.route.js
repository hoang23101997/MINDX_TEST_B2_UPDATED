import express from "express";
import inventoriesModel from "../models/inventories.model.js";

import { authMiddleware } from "../middlewares/auth.middlewares.js";

const inventoryRouter = express.Router();

inventoryRouter.post("/import-inventory", async (req, res) => {
  const inventoriesData = [
    {
      _id: 1321,
      sku: "almonds",
      description: "product 1",
      instock: 120,
    },
    { _id: 221421, sku: "bread", description: "product 2", instock: 80 },
    { _id: 3413, sku: "cashews", description: "product 3", instock: 60 },
    { _id: 421313, sku: "pecans", description: "product 4", instock: 70 },
  ];
  try {
    inventoriesModel.insertMany(inventoriesData);
    res.status(200).json({
      message: "Inventories data has been imported to database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
});

inventoryRouter.get("/", authMiddleware, (req, res) => {
  inventoriesModel
    .find({})
    .then((data) => {
      res.status(200).json({
        msg: "Get all products in inventory successfully",
        products: data,
      });
    })
    .catch(() => {
      res.status(500).json({
        msg: "Internal server error",
        data: null,
      });
    });
});

inventoryRouter.get("/low-quantity", authMiddleware, (req, res) => {
  inventoriesModel
    .find({ instock: { $lt: 100 } })
    .then((data) => {
      res.status(200).json({
        msg: "Get all low quantity products successfully",
        products: data,
      });
    })
    .catch(() => {
      res.status(500).json({
        msg: "Internal server error",
        data: null,
      });
    });
});

export default inventoryRouter;
