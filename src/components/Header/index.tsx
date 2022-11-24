import unifei from "../../assets/img-logoUnifei.png";
import { Button } from "../Button";
import {
  Container,
  Content,
  Image,
  Nav,
  Text,
  ContentLogo,
  TextLogo,
  ContentTextLogo,
  TextLogoTwo,
  ContainerPageAnalyst,
  ContentPageAnalyst,
  TextDecoration,
} from "./styles";

interface HeaderProps {
  typeScreen:
    | "login"
    | "loginAnalyst"
    | "PageClient"
    | "PageAnalyst"
    | "PageAdmin";
}

export function Header({ typeScreen, ...rest }: HeaderProps) {
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
      <></>;
    } else if (typeScreen === "PageClient") {
      return (
        <ContainerPageAnalyst>
          <Text>Bem vindo(a) Nome do Cliente</Text>
          <ContentPageAnalyst>
            <TextDecoration>Portal do Cliente</TextDecoration>
            <Button onClick={handleSair}>SAIR</Button>
          </ContentPageAnalyst>
        </ContainerPageAnalyst>
      );
    } else if (typeScreen === "PageAnalyst") {
      return (
        <ContainerPageAnalyst>
          <Text>Bem vindo(a) Nome do analista</Text>
          <ContentPageAnalyst>
            <TextDecoration>Portal do Analista</TextDecoration>
            <Button>Sair</Button>
          </ContentPageAnalyst>
        </ContainerPageAnalyst>
      );
    } else if (typeScreen === "PageAdmin") {
      return (
        <ContainerPageAnalyst>
          <Text>Bem vindo(a) Nome do Admin</Text>
          <ContentPageAnalyst>
            <TextDecoration>Portal do Admin</TextDecoration>
            <Button>Sair</Button>
          </ContentPageAnalyst>
        </ContainerPageAnalyst>
      );
    }
  };

  return (
    <Container {...rest}>
      <ContentLogo>
        <Image src={unifei} alt="img-logoUnifei" />
        <ContentTextLogo>
          <TextLogo>U N I F E I</TextLogo>
          <TextLogoTwo>Universidade Federal de Itajubá</TextLogoTwo>
        </ContentTextLogo>
      </ContentLogo>

      {renderRightContainer()}
    </Container>
  );
}
