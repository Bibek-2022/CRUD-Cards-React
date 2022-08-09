import express from "express";
import { createNewAdmin } from "../model/registerLogin/RegisterModel.js";

const route = express.Router();

route.post("/", async (req, res, next) => {
  try {
    req.body.password = hashPassword(req.body.password);
  } catch (error) {
    next(error);
  }
});

export default route;
