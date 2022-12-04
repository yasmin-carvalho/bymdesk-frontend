import * as yup from "yup";

export interface IFormRegisterAnalyst {
  setor: { value: string; label: string };
  matricula: string;
  nome: string;
  email: string;
  senha: string;
  confirmar_senha: string;
}

export const fieldsRegisterAnalyst = {
  SETOR: "setor",
  MATRICULA: "matricula",
  NOME: "nome",
  EMAIL: "email",
  SENHA: "senha",
  CONFIRMAR_SENHA: "confirmar_senha",
};

export const schemaRegisterAnalyst = yup.object().shape({
  [fieldsRegisterAnalyst.SETOR]: yup.object().required("obrigatório"),
  [fieldsRegisterAnalyst.MATRICULA]: yup.string().required("obrigatório"),
  [fieldsRegisterAnalyst.EMAIL]: yup.string().email().required("obrigatório"),
  [fieldsRegisterAnalyst.SENHA]: yup.string().required("obrigatório"),
  [fieldsRegisterAnalyst.CONFIRMAR_SENHA]: yup.string().required("obrigatório"),
});
