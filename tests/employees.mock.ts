export const find = [
  {
    matricula: 16,
    status: "ativo",
    nome: "Adam Sanders",
    email: "adamsanders@kpis.tech",
    email_do_gestor: "mitchellpeters@kpis.tech",
    data_de_admissao: "2020-04-25T03:00:00.000Z",
    data_de_rescisao: null,
    cargo: "Analista",
  },
  {
    matricula: 17,
    status: "ativo",
    nome: "Danielle Winters",
    email: "daniellewinters@kpis.tech",
    email_do_gestor: "",
    data_de_admissao: "2021-10-06T03:00:00.000Z",
    data_de_rescisao: null,
    cargo: "Diretor",
  },
];

export const findError = new Error("test find error");

export const create = {
  matricula: "16",
  status: "ativo",
  nome: "Adam Sanders",
  email: "adamsanders@kpis.tech",
  email_do_gestor: "mitchellpeters@kpis.tech",
  data_de_admissao: "2020-04-25T03:00:00.000Z",
  data_de_rescisao: null,
  cargo: "Analista",
};

export const createError = new Error("nome is required");

export const getAVGHeadcount = [
  {
    data: "2020-03-01T00:00:00.000Z",
    headcount: "0.00000000000000000000",
  },
  {
    data: "2020-04-01T00:00:00.000Z",
    headcount: "1.00000000000000000000",
  },
  {
    data: "2021-06-01T00:00:00.000Z",
    headcount: "1.00000000000000000000",
  },
  {
    data: "2021-09-01T00:00:00.000Z",
    headcount: "1.00000000000000000000",
  },
  {
    data: "2021-11-01T00:00:00.000Z",
    headcount: "1.00000000000000000000",
  },
  {
    data: "2022-06-01T00:00:00.000Z",
    headcount: "0.00000000000000000000",
  },
  {
    data: "2022-08-01T00:00:00.000Z",
    headcount: "1.00000000000000000000",
  },
];

export const getTurnover = [
  {
    data: "2020-04-01T00:00:00.000Z",
    turnover: "0",
  },
  {
    data: "2021-06-01T00:00:00.000Z",
    turnover: "2",
  },
  {
    data: "2021-09-01T00:00:00.000Z",
    turnover: "0",
  },
  {
    data: "2021-11-01T00:00:00.000Z",
    turnover: "1",
  },
  {
    data: "2022-06-01T00:00:00.000Z",
    turnover: "0",
  },
  {
    data: "2022-08-01T00:00:00.000Z",
    turnover: "0",
  },
];
