import * as yup from "yup";

export interface IFormRegisterTicket {
  bloco: { value: string; label: string };
  local: { value: string; label: string };
  tipo_de_mautencao: { value: string; label: string };
  descricao: string;
  anexar_arquivo: string | File;
}

export const fieldsRegisterTicket = {
  BLOCO: "bloco",
  LOCAL: "matricula",
  TIPO_DE_MANUTENCAO: "tipo_de_manutencao",
  DESCRICAO: "descricao",
  ANEXAR_ARQUIVO: "anexar_arquivo",
};

export const schemaRegisterTicket = yup.object().shape({
  [fieldsRegisterTicket.BLOCO]: yup.object().required("obrigatório"),
  [fieldsRegisterTicket.LOCAL]: yup.object().required("obrigatório"),
  [fieldsRegisterTicket.TIPO_DE_MANUTENCAO]: yup
    .object()
    .required("obrigatório"),
  [fieldsRegisterTicket.DESCRICAO]: yup.string().required("obrigatório"),
});
