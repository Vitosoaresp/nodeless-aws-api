import { Context } from "aws-lambda";
import { employeesService } from "../service/employees";
import { MessageUtil } from "../utils/message";

const getAll = async () => {
  try {
    const result = await employeesService.getAll();
    return MessageUtil.success(result);
  } catch (error) {
    console.error(error);
    return MessageUtil.error(error.code, error.message);
  }
};

// const create = async (event: any, context?: Context) => {
//   console.log("functionName", context.functionName);
//   const params = JSON.parse(event.body);

//   try {
//     const result = await employeesService.create(params);
//     return MessageUtil.success(result);
//   } catch (error) {
//     console.error(error);
//     return MessageUtil.error(error.code, error.message);
//   }
// };

const getHeadcount = async (event: any, _context?: Context) => {
  const manager = event.pathParameters.manager;
  if (!manager) {
    return MessageUtil.error(400, "Missing manager");
  }
  const result = await employeesService.getAVGHeadcount(manager);
  return MessageUtil.success(result);
};

const getTurnover = async (event: any, _context?: Context) => {
  const manager = event.pathParameters.manager;
  if (!manager) {
    return MessageUtil.error(400, "Missing manager");
  }
  const result = await employeesService.getTurnover(manager);
  return MessageUtil.success(result);
};

export const employeesController = {
  getAll,
  // create,
  getHeadcount,
  getTurnover,
};
