import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import Tooltip from "@mui/material/Tooltip";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Buttons, ContainerLeft, ContainerRight, Footer, Main } from "./styles";

export function CreateLoginAnalystc() {
  return (
    <>
      <Header typeScreen="loginAnalyst" />
      <Main>
        <ContainerLeft>
          <Input
            labelColum="Email"
            type="email"
            required
            placeholder="Digite seu email"
          />
          <Input
            labelColum="Senha"
            type="password"
            required
            placeholder="Digite sua senha"
          />
          <Button>Entrar</Button>
        </ContainerLeft>
        <ContainerRight>
          <Select
            label="Setor Responsável"
            required
            array={["Manutenção TI", "Manutenção Elétrica"]}
          />
          <Input label="Matrícula" required />
          <Input label="Nome completo" required />
          <Input label="Email" type="email" required />
          <Input label="Senha" type="password" required />
          <Input label="Confirmar senha" type="password" required />
          <Buttons>
            <Button>Registrar</Button>
            <Button>Cancelar</Button>
          </Buttons>
        </ContainerRight>
      </Main>
      <Footer>
        <Tooltip title="Caso não tenha um número de matrícula, você deve entrar em contato com o Administrador do Sistema para que crie sua matrícula. Você pode entrar em contato com o Administrador pelo email: yasmin.carvalho@unifei.edu.br ou telefone: (35)984128112">
          <ContactSupportIcon fontSize="large" />
        </Tooltip>
      </Footer>
    </>
  );
}
