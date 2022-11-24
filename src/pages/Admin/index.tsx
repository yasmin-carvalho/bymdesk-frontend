import { useState } from "react";
import { UnsolvedTicketsTab } from "./components/UnsolvedTicketsTab";
import { ResolvedTicketsTab } from "./components/ResolvedTicketsTab";
import { Header } from "../../components/Header";
import { Main } from "./styles";
import { Tabs } from "../../components/Tabs";
import { Matriculation } from "./components/Matriculation";

export function Admin() {
  const [indexTab, setIndexTab] = useState(0);

  const _renderTab = () => {
    switch (indexTab) {
      case 0:
        return <UnsolvedTicketsTab />;
      case 1:
        return <ResolvedTicketsTab />;
      case 2:
        return <Matriculation />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Header typeScreen="PageAdmin" />
      <Main>
        <Tabs
          arrayTabs={[
            "Tickets não resolvidos ❌",
            "Tickets resolvidos ✅",
            "Inscrever Matrícula",
            "Inscrever Bloco",
            "Inscrever Local",
          ]}
          setIndexTab={setIndexTab}
          indexTab={indexTab}
        >
          {_renderTab()}
        </Tabs>
      </Main>
    </>
  );
}
