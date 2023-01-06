import { useEffect } from "react";
import { CollapseConversation } from "../../../../components/CollapseConversation";
import { _renderBasicTextCell } from "../../../../components/RendersCellTable";
import TableApp from "../../../../components/Table/TableApp";
import { ITypeComponents } from "../../../../components/Table/types";
import { TabContainer } from "../../../../components/Tabs/styles";
import { useMessage } from "../../../../hooks/network/useMessage";
import { useTicket } from "../../../../hooks/network/useTicket";
import { useAuth } from "../../../../hooks/useAuth";
import {
  columnConfig,
  columnLabel,
  columnType,
  arrayRenderInputSearch,
} from "./constants";

export function MyTicketsTab() {
  const { getTicketsAll, allTickets, loading } = useTicket();
  const { id } = useAuth();
  const { getMessages, messagesState, refLoadingMessage } = useMessage();

  useEffect(() => {
    getTicketsAll(id);
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
        refLoadingCollapse={refLoadingMessage}
        renderCellHeader={(key) => columnLabel[key]}
        renderCollapse={() => <CollapseConversation dataList={messagesState} />}
        renderInputSearchAndSelect={arrayRenderInputSearch}
        onClickCollapse={(id: number) => getMessages(id)}
      />
    </TabContainer>
  );
}
