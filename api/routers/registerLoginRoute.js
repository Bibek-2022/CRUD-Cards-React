import express from "express";
import { hashPassword } from "../helpers/bcryptHelper.js";
import { createNewAdmin } from "../model/registerLogin/RegisterModel.js";
import { v4 as uuidv4 } from "uuid";
const route = express.Router();

route.post("/", async (req, res, next) => {
  try {
    req.body.password = hashPassword(req.body.password);
    const verificationCode = uuidv4();
    req.body.verificationCode = verificationCode;

    const result = await createNewAdmin(req.body);

    if (result?._id) {
      // send verification code to email

      res.status(200).json({
        message: "Admin created successfully",
        result,
      });
    }
    res.json({
      status: "error",
      message: "Admin not created",
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default route;
