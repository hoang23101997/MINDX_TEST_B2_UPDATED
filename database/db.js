import mongoose from "mongoose";

import "dotenv/config";
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.gldwneo.mongodb.net/`;
const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(url);
    console.log(`Database is connected at ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectToDB;
