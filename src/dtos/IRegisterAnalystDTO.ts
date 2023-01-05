import * as yup from "yup";
import { EnumTypeTicket } from "../constants/enums";

export interface IFormRegisterAnalyst {
  setor: { value: EnumTypeTicket; label: string };
  matricula: string;
  nome: string;
  email: string;
  senha: string;
  confirmar_senha: string;
  telefone: string;
}

export const fieldsRegisterAnalyst = {
  SETOR: "setor",
  MATRICULA: "matricula",
  NOME: "nome",
  EMAIL: "email",
  SENHA: "senha",
  CONFIRMAR_SENHA: "confirmar_senha",
  TELEFONE: "telefone",
};

export const schemaRegisterAnalyst = yup.object().shape({
  [fieldsRegisterAnalyst.SETOR]: yup.object().required("obrigatório"),
  [fieldsRegisterAnalyst.MATRICULA]: yup.string().required("obrigatório"),
  [fieldsRegisterAnalyst.EMAIL]: yup.string().email().required("obrigatório"),
  [fieldsRegisterAnalyst.SENHA]: yup.string().required("obrigatório"),
  [fieldsRegisterAnalyst.CONFIRMAR_SENHA]: yup.string().required("obrigatório"),
  [fieldsRegisterAnalyst.TELEFONE]: yup.string().required("obrigatório"),
});
