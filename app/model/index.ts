import { create, getAll, getAVGHeadcount, getTurnover } from "./employees";

export * from "./connection";
export const employeeModel = {
  create,
  getAll,
  getAVGHeadcount,
  getTurnover,
};
