import { useEffect } from "react";
import { CollapseConversation } from "../../../../components/CollapseConversation";
import { _renderBasicTextCell } from "../../../../components/RendersCellTable";
import { Select } from "../../../../components/Select";
import TableApp from "../../../../components/Table/TableApp";
import { ITypeComponents } from "../../../../components/Table/types";
import { TabContainer } from "../../../../components/Tabs/styles";
import { EnumStatus } from "../../../../constants/enums";
import { optionsStatus } from "../../../../constants/listSelects";
import { ITicketsDTO } from "../../../../dtos/ITicketsDTO";
import { useTicket } from "../../../../hooks/network/useTicket";
import { useAuth } from "../../../../hooks/useAuth";
import {
  arrayRenderInputSearch,
  columnConfig,
  columnLabel,
  columnType,
} from "./constants";

export function UnsolvedTicketsTab() {
  const { getUnsolvedTickets, putTicket, allTickets, loading } = useTicket();
  const { setor } = useAuth();

  useEffect(() => {
    getUnsolvedTickets(setor);
  }, []);

  const _renderBasicSelectCell = (value: EnumStatus, data: ITicketsDTO) => (
    <Select
      options={optionsStatus}
      onChangeStateControled={(e) => {
        e.stopPropagation();
        putTicket(
          { ...data, status: e.target.value as EnumStatus },
          "unsolved"
        );
      }}
      value={value}
      onClick={(e) => e.stopPropagation()}
    />
  );

  const components: ITypeComponents = {
    [columnType.NAME]: _renderBasicTextCell,
    [columnType.BLOCK]: _renderBasicTextCell,
    [columnType.LOCALE]: _renderBasicTextCell,
    [columnType.REQUESTER]: _renderBasicTextCell,
    [columnType.ANALYST]: _renderBasicTextCell,
    [columnType.STATUS]: _renderBasicSelectCell,
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
