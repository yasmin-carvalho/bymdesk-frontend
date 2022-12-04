import * as yup from "yup";

export interface IFormMatriculationDTO {
  matricula: string;
  confirme_matricula: string;
}

export const fieldsMatriculation = {
  MATRICULA: "matricula",
  CONFIRME_MATRICULA: "confirme_matricula",
};

export const schemaMatriculation = yup.object().shape({
  [fieldsMatriculation.MATRICULA]: yup
    .string()
    .min(10, "min. 10 caracteres")
    .required("obrigatório"),
  [fieldsMatriculation.CONFIRME_MATRICULA]: yup
    .string()
    .min(10, "min. 10 caracteres")
    .required("obrigatório"),
});
