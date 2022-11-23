import { useState } from "react";
import { UnsolvedTicketsTab } from "./components/UnsolvedTicketsTab";
import { ResolvedTicketsTab } from "./components/ResolvedTicketsTab";
import { Header } from "../../components/Header";
import { Main } from "./styles";
import { Tabs } from "../../components/Tabs";

export function AnalystPortal() {
  const [indexTab, setIndexTab] = useState(0);

  const _renderTab = () => {
    switch (indexTab) {
      case 0:
        return <UnsolvedTicketsTab />;
      case 1:
        return <ResolvedTicketsTab />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Header typeScreen="PageAnalyst" />
      <Main>
        <Tabs
          arrayTabs={["Tickets não resolvidos ❌", "Tickets resolvidos ✅"]}
          setIndexTab={setIndexTab}
          indexTab={indexTab}
        >
          {_renderTab()}
        </Tabs>
      </Main>
    </>
  );
}
