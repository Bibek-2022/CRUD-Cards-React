import "dotenv/config";
import express from "express";
// import { createConnection } from "../dbConfig/dbConfig.js";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

//db connection
import createConnection from "./dbConfig/dbConfig.js";
createConnection();

import crudRoute from "./routers/crudRoute.js";
app.use("/add", crudRoute);

app.get("/", (req, res) => {
  res.send("react app is running");
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server is running on port ${PORT}`);
});
