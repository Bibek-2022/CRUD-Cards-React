import express from "express";
import { createNewAdmin } from "../model/registerLogin/RegisterModel.js";

const route = express.Router();

route.post("/", async (req, res) => {
  try {
    const result = await createNewAdmin(req.body);
    console.log(result);
    res.json({
      message: "Hello World",
    });
  } catch (error) {
    next(error);
  }
});

export default route;
