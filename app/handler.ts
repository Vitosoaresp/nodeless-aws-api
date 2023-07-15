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

// import { employeeModel } from './model';
import { employeesController } from "./controller/employees";
// const booksController = new BooksController(books);

export const create: Handler = (event: any, context: Context) => {
  return employeesController.create(event, context);
};

export const find: Handler = () => employeesController.getAll();
