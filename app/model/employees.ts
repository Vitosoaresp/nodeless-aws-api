import { Employee, EmployeeDTO } from "../types/employees";
import connection from "./connection";

export const getAll = async (): Promise<Employee[]> => {
  await connection.connect();
  const employees = await connection.query("SELECT * FROM employees");
  return employees.rows as Employee[];
};

export const create = async (employee: EmployeeDTO): Promise<Employee> => {
  await connection.connect();
  try {
    const result = await connection.query(
      `INSERT INTO employees (nome, status, cargo, email, email_do_gestor, data_de_admissao, data_de_rescisao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        employee.nome,
        employee.status,
        employee.cargo,
        employee.email,
        employee.emailDoGestor,
        employee.dataDeAdmissao,
        employee.dataDeRescisao,
      ]
    );
    return result.rows[0] as Employee;
  } catch (error) {
    return error;
  }
};
