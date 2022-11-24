import { TabContainer } from "../../../../components/Tabs/styles";
import imgMapCampus from "../../../../assets/img-mapaunifei.jpg";
import { Container, Text } from "./styles";

export function CampusMapTab() {
  return (
    <TabContainer>
      <Container>
        <Text>Mapa do Campus de Itajubá</Text>
        <img src={imgMapCampus} alt="incidentes" />
      </Container>
    </TabContainer>
  );
}
