import { Context } from "aws-lambda";
import { employeesService } from "../service/employees";
import { MessageUtil } from "../utils/message";

const signIn = async (event: any, _context?: Context) => {
  const parsedBody = JSON.parse(event.body);
  const { email } = parsedBody;
  if (!email) {
    return MessageUtil.error(400, "Email is required");
  }
  const result = await employeesService.getByEmail(email);
  return MessageUtil.success(result);
};

export const authController = {
  signIn,
};
