import * as yup from "yup";

export interface IFormBlockDTO {
  bloco: string;
  confirme_bloco: string;
}

export const fieldsBlock = {
  BLOCO: "bloco",
  CONFIRME_BLOCO: "confirme_bloco",
};

export const schemaBlock = yup.object().shape({
  [fieldsBlock.BLOCO]: yup.string().required("obrigatório"),
  [fieldsBlock.CONFIRME_BLOCO]: yup.string().required("obrigatório"),
});
