import mongoose from "mongoose";
const UsersSchema = mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    collection: "users",
  }
);

const UsersModel = mongoose.model("users", UsersSchema);
export default UsersModel;
