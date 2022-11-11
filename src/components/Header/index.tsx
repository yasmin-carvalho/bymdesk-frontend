import unifei from "../../assets/img-logounifei.jpg";
import { Button } from "../Button";
import { Container, Content, Image, Nav, Text } from "./styles";

interface HeaderProps {
  typeScreen: "login" | "loginAnalyst" | "PageClient" | "PageAnalyst";
}

export function Header({ typeScreen }: HeaderProps) {
  const handleLogin = () => console.log("Login");

  const handleRegistrar = () => console.log("Registrar");

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
      return <></>;
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
