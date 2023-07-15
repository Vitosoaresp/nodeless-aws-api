import { z } from "zod";

export const employeeSchema = z.object({
  nome: z.string(),
  status: z.string(),
  cargo: z.string(),
  email: z.string(),
  emailDoGestor: z.string().optional(),
  dataDeAdmissao: z.string(),
  dataDeRescisao: z.string().optional(),
});
