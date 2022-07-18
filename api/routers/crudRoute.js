import express from "express";
import { createCard, getCard } from "../model/DataModel";
const router = express.Router();

router.get("/", async (res, req) => {
  try {
    const result = await getCard();
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

router.post("/", async (res, req) => {
  try {
    const result = await createCard(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "user created successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:_id", async (res, req) => {
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
