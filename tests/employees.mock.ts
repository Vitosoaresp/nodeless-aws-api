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
