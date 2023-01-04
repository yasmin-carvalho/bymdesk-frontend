import * as yup from "yup";

export interface ILocation {
  id?: number;
  nome: string;
  bloco_id: number;
}

export interface IFormLocationDTO {
  nome: string;
  confirme_localizacao: string;
  bloco_id: { label: string; value: string };
}

export const fieldsLocation = {
  BLOCO_ID: "bloco_id",
  NOME: "nome",
  CONFIRME_LOCALIZACAO: "confirme_localizacao",
};

export const schemaLocation = yup.object().shape({
  [fieldsLocation.NOME]: yup.string().required("obrigatório"),
  [fieldsLocation.CONFIRME_LOCALIZACAO]: yup.string().required("obrigatório"),
  [fieldsLocation.BLOCO_ID]: yup.object().shape({
    value: yup.string().required("obrigatorio"),
    label: yup.string().required("obrigatorio"),
  }),
});
