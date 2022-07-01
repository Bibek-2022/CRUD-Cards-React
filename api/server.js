import "dotenv/config";
import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server is running on port ${PORT}`);
});
