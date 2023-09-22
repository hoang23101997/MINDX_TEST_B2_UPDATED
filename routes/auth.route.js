/** @format */

import express from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import UserModel from "../models/users.model.js";

const authRouter = express.Router();

authRouter.post("/", (req, res) => {
  const { username, password } = req.body;
  UserModel.findOne({
    username,
  })
    .then((result) => {
      if (result) {
        if (password == result.password) {
          const newToken = jwt.sign(
            {
              username: username,
              password: password,
            },
            process.env.SECRET_KEY
          );
          res.status(200).json({
            msg: "Login successfully",
            token: newToken,
          });
        } else {
          res.status(403).json({
            msg: "Password incorrectly",
            token: null,
          });
        }
      } else {
        res.status(403).json({
          msg: "Can not find this account",
          token: null,
        });
      }
    })
    .catch((err) => {
      res.status(403).json({
        msg: err,
        token: null,
      });
    });
});

authRouter.post("/import-user", async (req, res) => {
  const userData = [
    { username: "admin", password: "MindX@2022" },
    { username: "alice", password: "MindX@2022" },
  ];
  try {
    UserModel.insertMany(userData);
    res.status(200).json({
      message: "User data has been imported to database",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
});
export default authRouter;
