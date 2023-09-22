import mongoose from "mongoose";

const inventoriesSchema = mongoose.Schema(
  {
    _id: {
      type: Number,
      require: true,
    },
    sku: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    instock: {
      type: Number,
      require: true,
    },
  },
  {
    collection: "inventories",
  }
);

const inventoriesModel = mongoose.model("inventories", inventoriesSchema);
export default inventoriesModel;
