import * as yup from "yup";

export interface IFormLocationDTO {
  localizacao: string;
  confirme_localizacao: string;
}

export const fieldsLocation = {
  LOCALIZACAO: "localizacao",
  CONFIRME_LOCALIZACAO: "confirme_localizacao",
};

export const schemaLocation = yup.object().shape({
  [fieldsLocation.LOCALIZACAO]: yup.string().required("obrigatório"),
  [fieldsLocation.CONFIRME_LOCALIZACAO]: yup.string().required("obrigatório"),
});
