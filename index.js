import express from "express";
import connectToDB from "./database/db.js";
import bodyParser from "body-parser";
import "dotenv/config";
import router from "./routes/index.js";
const app = express();

// Parse JSON bodies for login API
app.use(bodyParser.json());
app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
  connectToDB();
});
