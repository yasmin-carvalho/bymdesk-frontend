import * as yup from "yup";

export interface IFormLogin {
  email: string;
  password: string;
  // rememberMe: boolean;
}

export const fieldsLogin = {
  EMAIL: "email",
  PASSWORD: "password",
  // REMEMBER_ME: "rememberMe",
};

export const schemaLogin = yup.object().shape({
  [fieldsLogin.EMAIL]: yup.string().email().required("obrigatório"),
  [fieldsLogin.PASSWORD]: yup.string().required("obrigatório"),
  // [fieldsLogin.REMEMBER_ME]: yup.boolean().default(() => false),
});
