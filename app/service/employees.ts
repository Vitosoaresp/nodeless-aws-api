import { employeeModel } from "../model";
// import { z } from "zod";
// import { Employee } from "../types/employees";
// import { employeeSchema } from "../utils/validations";

// type EmployeeSchema = z.infer<typeof employeeSchema>;

const getAllEmployeers = async () => {
  const employees = await employeeModel.getAll();
  return employees;
};

// const createEmployee = async (data: EmployeeSchema): Promise<Employee> => {
//   try {
//     employeeSchema.parse(data);
//     const formattedData = {
//       nome: data.nome,
//       status: data.status,
//       cargo: data.cargo,
//       email: data.email,
//       emailDoGestor: data.emailDoGestor,
//       dataDeAdmissao: new Date(data.dataDeAdmissao),
//       dataDeRescisao: data.dataDeRescisao
//         ? new Date(data.dataDeRescisao)
//         : null,
//     };
//     const employee = await employeeModel.create(formattedData);
//     return employee;
//   } catch (error) {
//     return error;
//   }
// };

const getAVGHeadcount = async (manager: string) => {
  const result = await employeeModel.getAVGHeadcount(manager);
  return result;
};

const getTurnover = async (manager: string) => {
  const result = await employeeModel.getTurnover(manager);
  return result;
};

const getByEmail = async (email: string) => {
  const employee = await employeeModel.getByEmail(email);
  return { name: employee.nome, email: employee.email, role: employee.cargo };
};

export const employeesService = {
  getAll: getAllEmployeers,
  getAVGHeadcount,
  getTurnover,
  getByEmail,
};
