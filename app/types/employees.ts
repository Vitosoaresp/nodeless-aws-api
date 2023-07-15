export interface EmployeeDTO {
  nome: string;
  status: string;
  cargo: string;
  email: string;
  emailDoGestor?: string;
  dataDeAdmissao: Date;
  dataDeRescisao?: Date;
}

export interface Employee {
  matricula: string;
  nome: string;
  status: string;
  cargo: string;
  email: string;
  emailDoGestor?: string;
  dataDeAdmissao: Date;
  dataDeRescisao?: Date;
}
