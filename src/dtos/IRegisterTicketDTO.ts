import * as yup from "yup";
import { EnumTypeTicket } from "../constants/enums";

export interface IFormRegisterTicket {
  bloco: { value: string; label: string };
  local_id: { value: string; label: string };
  tipo: { value: EnumTypeTicket; label: string };
  descricao: string;
  imagem: string | File;
}

export const fieldsRegisterTicket = {
  BLOCO: "bloco",
  LOCAL: "local_id",
  TIPO: "tipo",
  DESCRICAO: "descricao",
  IMAGEM: "imagem",
};

export const schemaRegisterTicket = yup.object().shape({
  [fieldsRegisterTicket.BLOCO]: yup.object().required("obrigatório"),
  [fieldsRegisterTicket.LOCAL]: yup.object().required("obrigatório"),
  [fieldsRegisterTicket.TIPO]: yup.object().required("obrigatório"),
  [fieldsRegisterTicket.DESCRICAO]: yup.string().required("obrigatório"),
});
