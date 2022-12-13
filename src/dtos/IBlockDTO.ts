import * as yup from "yup";

export interface IBlockDTO {
  bloco: string;
}

export interface IFormBlockDTO {
  nome: string;
  confirme_bloco: string;
}

export const fieldsBlock = {
  NOME: "nome",
  CONFIRME_BLOCO: "confirme_bloco",
};

export const schemaBlock = yup.object().shape({
  [fieldsBlock.NOME]: yup.string().required("obrigatório"),
  [fieldsBlock.CONFIRME_BLOCO]: yup.string().required("obrigatório"),
});
