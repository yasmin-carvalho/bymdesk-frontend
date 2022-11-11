import unifei from "../../assets/img-logounifei.jpg";
import { Button } from "../Button";
import { Container, Content, Image, Nav, Text } from "./styles";

interface HeaderProps {
  typeScreen: "login" | "client" | "analyst";
}

export function Header({ typeScreen }: HeaderProps) {
  const handleLogin = () => console.log("Login");

  const handleRegistrar = () => console.log("Registrar");

  return (
    <Container>
      <Image src={unifei} alt="logounifei" />
      <Content>
        {typeScreen === "login" ? (
          <div>
            <Text>Bem vindo(a)</Text>
            <Nav>
              <Button onClick={handleLogin}>LOGIN</Button>
              <Button onClick={handleRegistrar}>REGISTRAR</Button>
            </Nav>
          </div>
        ) : typeScreen === "client" ? (
          <span>Client</span>
        ) : (
          <span>Analyst</span>
        )}
      </Content>
    </Container>
  );
}
