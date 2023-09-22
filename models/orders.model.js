import mongoose from "mongoose";
const ordersSchema = mongoose.Schema(
  {
    _id: Number,
    item: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
  },
  {
    collection: "orders",
  }
);

const ordersModel = mongoose.model("orders", ordersSchema);
export default ordersModel;
