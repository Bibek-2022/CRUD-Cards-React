import "dotenv/config";
import express from "express";
// import { createConnection } from "../dbConfig/dbConfig.js";
const app = express();
const PORT = process.env.PORT || 8000;

//db connection
import createConnection from "./dbConfig/dbConfig.js";
createConnection();

// middlewares
app.use(express.json());

import crudRoute from "./routers/crudRoute.js";
app.use("/add", crudRoute);

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server is running on port ${PORT}`);
});
