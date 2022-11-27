import { _renderBasicTextCell } from "../../../../components/RendersCellTable";
import TableApp from "../../../../components/Table/TableApp";
import { ITypeComponents } from "../../../../components/Table/types";
import { TabContainer } from "../../../../components/Tabs/styles";
import {
  columnConfig,
  columnLabel,
  columnType,
  data,
  arrayRenderInputSearch,
} from "./constants";

export function MyTicketsTab() {
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
        data={data}
        renderCellHeader={(key) => columnLabel[key]}
        renderCollapse={() => <span>Olá</span>}
        renderInputSearchAndSelect={arrayRenderInputSearch}
      />
    </TabContainer>
  );
}
