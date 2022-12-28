import { useEffect } from "react";
import { CollapseConversation } from "../../../../components/CollapseConversation";
import { _renderBasicTextCell } from "../../../../components/RendersCellTable";
import TableApp from "../../../../components/Table/TableApp";
import { ITypeComponents } from "../../../../components/Table/types";
import { TabContainer } from "../../../../components/Tabs/styles";
import { useTicket } from "../../../../hooks/network/useTicket";
import {
  arrayRenderInputSearch,
  columnConfig,
  columnLabel,
  columnType,
} from "./constants";

export function UnsolvedTicketsTab() {
  const { getUnsolvedTickets, allTickets } = useTicket();

  useEffect(() => {
    getUnsolvedTickets();
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
      {allTickets.length && (
        <TableApp
          tableName="table-my-tickets-unsolved"
          columnConfig={columnConfig}
          components={components}
          data={allTickets}
          renderCellHeader={(key) => columnLabel[key]}
          renderCollapse={() => <CollapseConversation />}
          renderInputSearchAndSelect={arrayRenderInputSearch}
        />
      )}
    </TabContainer>
  );
}
