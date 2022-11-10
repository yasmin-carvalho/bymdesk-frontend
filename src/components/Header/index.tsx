import unifei from "../../assets/unifei.jpg";
import { Button } from "../Button";
import { Container, Content } from "./styles";

interface HeaderProps {
  typeScreen: "login" | "client" | "analyst";
}

export function Header({ typeScreen }: HeaderProps) {
  const handleLogin = () => console.log("Login");

  const handleRegistrar = () => console.log("Registrar");

  return (
    <Container>
      <Content>
        <img src={unifei} alt="logounifei" width="315" height="110" />
        {typeScreen === "login" ? (
          <div>
            <p>Bem vindo(a)</p>
            <nav>
              <Button onClick={handleLogin}>LOGIN</Button>
              <Button onClick={handleRegistrar}>REGISTRAR</Button>
            </nav>
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
