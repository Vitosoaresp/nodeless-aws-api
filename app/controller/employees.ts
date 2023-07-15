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

const create = async (event: any, context?: Context) => {
  console.log("functionName", context.functionName);
  const params = JSON.parse(event.body);

  try {
    const result = await employeesService.create(params);
    return MessageUtil.success(result);
  } catch (error) {
    console.error(error);
    return MessageUtil.error(error.code, error.message);
  }
};

export const employeesController = {
  getAll,
  create,
};
