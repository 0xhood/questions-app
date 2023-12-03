import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

// append .env vars to envirement variables
dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });

import AppError from "./errors/app.error";


// select settings for choosen mode
const env = process.env.NODE_ENV || "development";

// create instance from express
const app = express();

import appConfigInitilzer from "./config/app.config";
import ErrorsGateway from "./errors/gateway.error";
import homeRouter from "./modules/home/home.router";

// retrieve application config
const {
  app: { debug, logger_format, port },
  corsOption,
  name,
} = appConfigInitilzer(env)!;

// add some vars to express app
app.set("port", port);
app.set("debug", debug);
app.set("env", name);

// initialize middlewares
app.use(cors(corsOption));
app.use(helmet());
app.use(express.json());
app.use(morgan(process.env.MORGAN_MODE!));
// app.use(express.urlencoded({ extended: true }));
app.use(
  express.static(path.join(__dirname, "./public"), { dotfiles: "ignore" })
);

// start resources
app.use("/api/v1", homeRouter);

// start deafult route
app.use("*", (req, res, next) => {
  next(new AppError(404, `Requested URL ${req.baseUrl} not found.`));
});

app.use(ErrorsGateway);

export default app;
