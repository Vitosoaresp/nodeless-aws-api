import { z } from "zod";
import { employeeModel } from "../model";
import { Employee } from "../types/employees";
import { employeeSchema } from "../utils/validations";

type EmployeeSchema = z.infer<typeof employeeSchema>;

const getAllEmployeers = async () => {
  const employees = await employeeModel.getAll();
  return employees;
};

const createEmployee = async (data: EmployeeSchema): Promise<Employee> => {
  try {
    employeeSchema.parse(data);
    const formattedData = {
      nome: data.nome,
      status: data.status,
      cargo: data.cargo,
      email: data.email,
      emailDoGestor: data.emailDoGestor,
      dataDeAdmissao: new Date(data.dataDeAdmissao),
      dataDeRescisao: data.dataDeRescisao
        ? new Date(data.dataDeRescisao)
        : null,
    };
    const employee = await employeeModel.create(formattedData);
    return employee;
  } catch (error) {
    return error;
  }
};

export const employeesService = {
  getAll: getAllEmployeers,
  create: createEmployee,
};
