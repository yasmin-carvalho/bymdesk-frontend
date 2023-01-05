import unifei from "../../assets/img-logoUnifei.png";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
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
import { RoutesEnum } from "../../constants/routesList";
import { useAuth } from "../../hooks/useAuth";

interface HeaderProps {
  typeScreen:
    | "login"
    | "loginAnalyst"
    | "PageClient"
    | "PageAnalyst"
    | "PageAdmin";
}

export function Header({ typeScreen, ...rest }: HeaderProps) {
  const navigate = useNavigate();
  const { nome, logout } = useAuth();

  const logoutPage = () => {
    logout();
    navigate(RoutesEnum.LOGIN);
  };

  const renderRightContainer = () => {
    if (typeScreen === "login") {
      return (
        <Content>
          <div>
            <Text>Bem vindo(a)</Text>
            <Nav>
              <Button onClick={() => navigate(RoutesEnum.LOGIN)}>LOGIN</Button>
              <Button onClick={() => navigate(RoutesEnum.REGISTRO_CLIENTE)}>
                REGISTRAR
              </Button>
            </Nav>
          </div>
        </Content>
      );
    } else if (typeScreen === "loginAnalyst") {
      <></>;
    } else if (typeScreen === "PageClient") {
      return (
        <ContainerPageAnalyst>
          <Text>Bem vindo(a) {nome}</Text>
          <ContentPageAnalyst>
            <TextDecoration>Portal do Cliente</TextDecoration>
            <Button onClick={logoutPage}>SAIR</Button>
          </ContentPageAnalyst>
        </ContainerPageAnalyst>
      );
    } else if (typeScreen === "PageAnalyst") {
      return (
        <ContainerPageAnalyst>
          <Text>Bem vindo(a) {nome}</Text>
          <ContentPageAnalyst>
            <TextDecoration>Portal do Analista</TextDecoration>
            <Button onClick={logoutPage}>Sair</Button>
          </ContentPageAnalyst>
        </ContainerPageAnalyst>
      );
    } else if (typeScreen === "PageAdmin") {
      return (
        <ContainerPageAnalyst>
          <Text>Bem vindo(a) {nome}</Text>
          <ContentPageAnalyst>
            <TextDecoration>Portal do Admin</TextDecoration>
            <Button onClick={logoutPage}>Sair</Button>
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
