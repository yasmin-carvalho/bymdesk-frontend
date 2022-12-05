import * as yup from "yup";

export interface IFormLogin {
  email: string;
  senha: string;
  // rememberMe: boolean;
}

export const fieldsLogin = {
  EMAIL: "email",
  SENHA: "senha",
  // REMEMBER_ME: "rememberMe",
};

export const schemaLogin = yup.object().shape({
  [fieldsLogin.EMAIL]: yup.string().email().required("obrigatório"),
  [fieldsLogin.SENHA]: yup.string().required("obrigatório"),
  // [fieldsLogin.REMEMBER_ME]: yup.boolean().default(() => false),
});
