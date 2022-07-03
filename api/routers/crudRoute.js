import express from "express";
const router = express.Router();

router.post("/add", async (res, req) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
});
export default router;
