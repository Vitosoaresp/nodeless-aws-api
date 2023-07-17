import {
  AVGHeadcount,
  Employee,
  EmployeeDTO,
  Turnover,
} from "../types/employees";
import client from "./connection";

export const getAll = async (): Promise<Employee[]> => {
  await client.connect();
  const employees = await client.query("SELECT * FROM employees");
  return employees.rows as Employee[];
};

export const create = async (employee: EmployeeDTO): Promise<Employee> => {
  await client.connect();
  try {
    const result = await client.query(
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

export const getAVGHeadcount = async (
  manager: string
): Promise<AVGHeadcount[]> => {
  await client.connect();
  const result = await client.query(
    `WITH RECURSIVE liderados AS (
      SELECT
        matricula,
        nome,
        status,
        email,
        email_do_gestor,
        data_de_admissao,
        data_de_rescisao,
        cargo
      FROM
        employees
      WHERE
        email = $1
      UNION ALL
      SELECT
        e.matricula,
        e.nome,
        e.status,
        e.email,
        e.email_do_gestor,
        e.data_de_admissao,
        e.data_de_rescisao,
        e.cargo
      FROM
        employees AS e
      INNER JOIN
        liderados AS l ON e.email_do_gestor = l.email
      WHERE
        (e.data_de_rescisao IS NULL OR e.data_de_rescisao >= DATE_TRUNC('month', l.data_de_admissao + INTERVAL '1 month'))
        AND (l.status = 'ativo' OR l.data_de_rescisao >= DATE_TRUNC('month', l.data_de_admissao + INTERVAL '1 month'))
    )
    SELECT
      DATE_TRUNC('month', l.data_de_admissao) AS data,
      AVG(CASE WHEN l.status = 'ativo' OR l.data_de_rescisao >= DATE_TRUNC('month', l.data_de_admissao + INTERVAL '1 month') THEN 1 ELSE 0 END) AS headcount
    FROM
      liderados AS l
    GROUP BY
      data
    ORDER BY
      data;
    `,
    [manager]
  );

  return result.rows as AVGHeadcount[];
};

export const getTurnover = async (manager: string): Promise<Turnover[]> => {
  await client.connect();
  const result = await client.query(
    `WITH RECURSIVE liderados AS (
      SELECT
        matricula,
        nome,
        status,
        email,
        email_do_gestor,
        data_de_admissao,
        data_de_rescisao,
        cargo
      FROM
        employees
      WHERE
        email_do_gestor = $1
      UNION ALL
      SELECT
        e.matricula,
        e.nome,
        e.status,
        e.email,
        e.email_do_gestor,
        e.data_de_admissao,
        e.data_de_rescisao,
        e.cargo
      FROM
        employees AS e
      INNER JOIN
        liderados AS l ON e.email_do_gestor = l.email
      WHERE
        e.data_de_rescisao IS NULL OR e.data_de_rescisao >= DATE_TRUNC('month', l.data_de_admissao + INTERVAL '1 month')
    ),
    headcount AS (
      SELECT
        DATE_TRUNC('month', l.data_de_admissao) AS mes,
        COUNT(DISTINCT l.matricula) AS total_funcionarios
      FROM
        liderados AS l
      GROUP BY
        mes
    ),
    turnover AS (
      SELECT
        DATE_TRUNC('month', l.data_de_rescisao) AS mes,
        COUNT(DISTINCT l.matricula) AS total_saida
      FROM
        liderados AS l
      WHERE
        l.data_de_rescisao IS NOT NULL
      GROUP BY
        mes
    )
    SELECT
      h.mes as data,
      COALESCE(t.total_saida, 0) / h.total_funcionarios AS turnover
    FROM
      headcount AS h
    LEFT JOIN
      turnover AS t ON h.mes = t.mes
    ORDER BY
      data;    
    `,
    [manager]
  );

  return result.rows as Turnover[];
};

export const getByEmail = async (email: string): Promise<Employee> => {
  await client.connect();
  const result = await client.query(
    `SELECT * FROM employees WHERE email = $1`,
    [email]
  );
  return result.rows[0] as Employee;
};
