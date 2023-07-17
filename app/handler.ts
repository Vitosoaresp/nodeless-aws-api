import { Context, Handler } from "aws-lambda";
import dotenv from "dotenv";
import path from "path";
const dotenvPath = path.join(
  __dirname,
  "../",
  `config/.env.${process.env.NODE_ENV}`
);
dotenv.config({
  path: dotenvPath,
});

import { employeesController } from "./controller/employees";

export const find: Handler = () => employeesController.getAll();

export const headcount: Handler = (event: any, context: Context) =>
  employeesController.getHeadcount(event, context);

export const turnover: Handler = (event: any, context: Context) =>
  employeesController.getTurnover(event, context);
