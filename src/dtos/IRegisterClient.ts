import * as yup from "yup";

export interface IFormRegisterClient {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  confirmar_senha: string;
}

export const fieldsRegisterClient = {
  NOME: "nome",
  EMAIL: "email",
  TELEFONE: "telefone",
  SENHA: "senha",
  CONFIRMAR_SENHA: "confirmar_senha",
};

export const schemaRegisterClient = yup.object().shape({
  [fieldsRegisterClient.NOME]: yup.string().required("obrigatório"),
  [fieldsRegisterClient.TELEFONE]: yup.string().required("obrigatório"),
  [fieldsRegisterClient.EMAIL]: yup.string().email().required("obrigatório"),
  [fieldsRegisterClient.SENHA]: yup.string().required("obrigatório"),
  [fieldsRegisterClient.CONFIRMAR_SENHA]: yup.string().required("obrigatório"),
});
