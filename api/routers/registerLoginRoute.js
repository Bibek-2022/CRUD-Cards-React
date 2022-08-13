import express from "express";
import { comparePassword, hashPassword } from "../helpers/bcryptHelper.js";
import {
  createNewAdmin,
  getOneAdmin,
} from "../model/registerLogin/RegisterModel.js";
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
        status: "success",
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

// Admin Login
route.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await getOneAdmin({ email });
    if (result?._id) {
      const isPasswordMatch = await comparePassword(password, result.password);
      result.password = undefined;
      if (isPasswordMatch) {
        res.status(200).json({
          message: "Admin logged in successfully",
          result,
        });
      } else {
        res.status(400).json({
          message: "Invalid password",
        });
      }
    } else {
      res.status(400).json({
        message: "Invalid email",
      });
    }
  } catch (error) {
    next(error);
  }
});

export default route;
