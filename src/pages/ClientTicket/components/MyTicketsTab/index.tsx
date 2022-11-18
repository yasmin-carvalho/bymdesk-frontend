import { _renderBasicTextCell } from "../../../../components/RendersCellTable";
import TableApp from "../../../../components/Table/TableApp";
import { ITypeComponents } from "../../../../components/Table/types";
import { columnConfig, columnLabel, columnType, data } from "./constants";

export function MyTicketsTab() {
  const components: ITypeComponents = {
    [columnType.NAME]: _renderBasicTextCell,
    [columnType.BLOCK]: _renderBasicTextCell,
    [columnType.LOCALE]: _renderBasicTextCell,
    [columnType.TYPE]: _renderBasicTextCell,
  };

  return (
    <TableApp
      tableName="table-my-tickets"
      columnConfig={columnConfig}
      components={components}
      data={data}
      renderCellHeader={(key) => columnLabel[key]}
      renderCollapse={() => <span>Olá</span>}
    />
  );
}
