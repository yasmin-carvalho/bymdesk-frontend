import { useState } from "react";
import { Header } from "../../components/Header";
import { Tabs } from "../../components/Tabs";
import { CampusMapTab } from "./components/CampusMapTab";
import { InitTab } from "./components/InitTab";
import { MyTicketsTab } from "./components/MyTicketsTab";
import { Main } from "./styles";

export function ClientTicket() {
  const [indexTab, setIndexTab] = useState(0);

  const _renderTab = () => {
    switch (indexTab) {
      case 0:
        return <InitTab />;
      case 1:
        return <MyTicketsTab />;
      case 2:
        return <CampusMapTab />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Header typeScreen="PageClient" />
      <Main>
        <Tabs
          arrayTabs={["Início", "Meus Tickets", "Mapa do Campus"]}
          setIndexTab={setIndexTab}
          indexTab={indexTab}
        >
          {_renderTab()}
        </Tabs>
      </Main>
    </>
  );
}
