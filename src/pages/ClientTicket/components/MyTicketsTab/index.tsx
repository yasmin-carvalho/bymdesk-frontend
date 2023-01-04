import { useEffect } from "react";
import { CollapseConversation } from "../../../../components/CollapseConversation";
import { _renderBasicTextCell } from "../../../../components/RendersCellTable";
import TableApp from "../../../../components/Table/TableApp";
import { ITypeComponents } from "../../../../components/Table/types";
import { TabContainer } from "../../../../components/Tabs/styles";
import { useTicket } from "../../../../hooks/network/useTicket";
import {
  columnConfig,
  columnLabel,
  columnType,
  arrayRenderInputSearch,
} from "./constants";

export function MyTicketsTab() {
  const { getTicketsAll, allTickets, loading } = useTicket();

  useEffect(() => {
    getTicketsAll();
  }, []);

  const components: ITypeComponents = {
    [columnType.NAME]: _renderBasicTextCell,
    [columnType.BLOCK]: _renderBasicTextCell,
    [columnType.LOCALE]: _renderBasicTextCell,
    [columnType.TYPE]: _renderBasicTextCell,
    [columnType.STATUS]: _renderBasicTextCell,
  };

  return (
    <TabContainer>
      <TableApp
        tableName="table-my-tickets"
        columnConfig={columnConfig}
        components={components}
        data={allTickets}
        isLoading={loading}
        renderCellHeader={(key) => columnLabel[key]}
        renderCollapse={() => <CollapseConversation />}
        renderInputSearchAndSelect={arrayRenderInputSearch}
      />
    </TabContainer>
  );
}
