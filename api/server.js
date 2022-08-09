import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

// import { createConnection } from "../dbConfig/dbConfig.js";
const app = express();
const PORT = process.env.PORT || 8000;

//db connection
import createConnection from "./dbConfig/dbConfig.js";
createConnection();

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

import crudRoute from "./routers/crudRoute.js";
import registerLoginRoute from "./routers/registerLoginRoute.js";
app.use("/add", crudRoute);
app.use("/reg-login", registerLoginRoute);

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server is running on port ${PORT}`);
});
