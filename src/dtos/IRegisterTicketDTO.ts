import * as yup from "yup";
import { EnumTypeTicket } from "../constants/enums";

export interface IFormRegisterTicket {
  bloco: { value: string; label: string };
  local: { value: string; label: string };
  tipo_de_mautencao: { value: EnumTypeTicket; label: string };
  descricao: string;
  anexar_arquivo: string | File;
}

export const fieldsRegisterTicket = {
  BLOCO: "nome_bloco",
  LOCAL: "nome_local",
  TIPO_DE_MANUTENCAO: "tipo",
  DESCRICAO: "descricao",
  ANEXAR_ARQUIVO: "imagem",
};

export const schemaRegisterTicket = yup.object().shape({
  [fieldsRegisterTicket.BLOCO]: yup.object().required("obrigatório"),
  [fieldsRegisterTicket.LOCAL]: yup.object().required("obrigatório"),
  [fieldsRegisterTicket.TIPO_DE_MANUTENCAO]: yup
    .object()
    .required("obrigatório"),
  [fieldsRegisterTicket.DESCRICAO]: yup.string().required("obrigatório"),
});
