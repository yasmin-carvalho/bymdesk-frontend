import unifei from "../../assets/img-logounifei.jpg";
import { Button } from "../Button";
import { Container, Content, Image, Nav, Text, DivSair } from "./styles";

interface HeaderProps {
  typeScreen: "login" | "loginAnalyst" | "PageClient" | "PageAnalyst";
}

export function Header({ typeScreen }: HeaderProps) {
  const handleLogin = () => console.log("Login");

  const handleRegistrar = () => console.log("Registrar");

  const handleSair = () => console.log("Sair");

  const renderRightContainer = () => {
    if (typeScreen === "login") {
      return (
        <Content>
          <div>
            <Text>Bem vindo(a)</Text>
            <Nav>
              <Button onClick={handleLogin}>LOGIN</Button>
              <Button onClick={handleRegistrar}>REGISTRAR</Button>
            </Nav>
          </div>
        </Content>
      );
    } else if (typeScreen === "loginAnalyst") {
      return null;
    } else if (typeScreen === "PageClient") {
      return (
        <Content>
          <div>
            <Text>Bem vindo(a) Yasmin Karolyne Aniceto Carvalho</Text>
            <DivSair>
              <Button onClick={handleSair}>SAIR</Button>
            </DivSair>
          </div>
        </Content>
      );
    } else if (typeScreen === "PageAnalyst") {
      return <></>;
    }
  };

  return (
    <Container>
      <Image src={unifei} alt="logounifei" />
      {renderRightContainer()}
    </Container>
  );
}
