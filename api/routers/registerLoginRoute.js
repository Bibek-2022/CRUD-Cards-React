import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
  try {
    res.json({
      message: "Hello World",
    });
  } catch (error) {
    next(error);
  }
});

export default route;
