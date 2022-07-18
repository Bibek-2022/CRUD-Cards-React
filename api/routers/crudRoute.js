import express from "express";
import { createCard, getCard } from "../model/DataModel.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await getCard();
    result
      ? res.json({
          status: "success",
          message: "Here are the product",
          result,
        })
      : res.json({
          status: "error",
          message: "Cant get the product",
          result,
        });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await createCard(req.body);
    console.log(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const {
      params: { _id },
    } = req;
    const result = await deleteCard(_id);
    console.log(result);
    res.json({
      status: "success",
      message: "user created successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
