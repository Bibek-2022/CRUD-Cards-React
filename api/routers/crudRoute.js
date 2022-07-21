import express from "express";
import {
  createCard,
  deleteCard,
  getCard,
  updateCard,
} from "../model/DataModel.js";
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
    const { _id } = req.params;
    const result = await deleteCard(_id);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "card deleted successfully",
          result,
        })
      : res.json({
          status: "error",
          message: "card not deleted successfully",
          result,
        });
  } catch (error) {
    console.log(error);
  }
});

router.put("/", async (req, res) => {
  try {
    const result = await updateCard(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "user created successfully",
      result,
    });
  } catch (error) {
    console.log(error);
  }
});
export default router;
