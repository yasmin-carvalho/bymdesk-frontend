import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  convertNumberToString,
  convertBooleanToString,
  convertBooleanToStringYesOrNot,
  convertTimestampToDateString,
} from "../../constants/converts";

import { TablePaginationActions } from "../total-pagination-actions/TotalPaginationActions";
import { HeaderTable } from "./HeaderTable";
import Row from "./Row";
import { WrapperCell, StyledTableCell, Th, Wrapper } from "./styles";
import {
  IRenderInputSearch,
  ITypeColumnConfig,
  ITypeComponents,
  TypeColumnTableEnum,
} from "./types";

interface TableAppProps {
  tableName: string;
  columnConfig: ITypeColumnConfig;
  data: any[];
  components: ITypeComponents;
  // eslint-disable-next-line @typescript-eslint/ban-types
  renderCellHeader: (key: string) => {};
  // eslint-disable-next-line @typescript-eslint/ban-types
  renderCollapse?: () => {};
  renderInputSearch?: IRenderInputSearch;
  renderInputSearchAndSelect?: IRenderInputSearch[];
  arrayRenderInputSearch?: IRenderInputSearch[];
  isLoading: boolean;
  onClickCollapse?: (id: number) => void;
  refLoadingCollapse?: React.MutableRefObject<boolean>;
}

const TableApp: React.FC<TableAppProps> = ({
  tableName,
  columnConfig,
  data,
  components,
  renderCellHeader,
  renderCollapse,
  renderInputSearch,
  renderInputSearchAndSelect,
  arrayRenderInputSearch,
  isLoading,
  onClickCollapse,
  refLoadingCollapse,
  ...rest
}) => {
  const [dataState, setDataState] = useState([]);

  useEffect(() => {
    setDataState(data);
  }, [data]);

  const columnConfigKeys = [
    ...Object.entries(columnConfig).map(([key, value]) => key),
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyAllData =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataState.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (
    value: string,
    searchPropertName: string,
    type: keyof typeof TypeColumnTableEnum
  ) => {
    const newUpdateInstance: any[] = [];
    const textTyped = new RegExp(value.toUpperCase(), "i");

    for (const instance of data) {
      if (
        (type === "string" && instance[searchPropertName].match(textTyped)) ||
        (type === "number" &&
          convertNumberToString(instance[searchPropertName]).match(
            textTyped
          )) ||
        (type === "boolean" &&
          convertBooleanToString(instance[searchPropertName]).match(
            textTyped
          )) ||
        (type === "timestamp" &&
          convertTimestampToDateString(instance[searchPropertName]).match(
            textTyped
          )) ||
        (type === "yesOrNot" &&
          convertBooleanToStringYesOrNot(instance[searchPropertName]).match(
            textTyped
          ))
      ) {
        newUpdateInstance.push(instance);
      } else {
        setDataState(data);
      }

      setPage(0);
      setDataState(newUpdateInstance);
    }
  };

  return (
    <Wrapper {...rest}>
      <HeaderTable
        handleSearch={handleSearch}
        arrayRenderInputSearch={arrayRenderInputSearch}
        renderInputSearch={renderInputSearch}
        renderInputSearchAndSelect={renderInputSearchAndSelect}
      />

      <TableContainer component={Paper}>
        <Table aria-label={tableName}>
          <TableHead>
            <TableRow>
              {React.Children.toArray(
                columnConfigKeys.map((key) => (
                  <StyledTableCell
                    align={columnConfig[key]?.align}
                    width={columnConfig[key]?.width}
                  >
                    <Th>
                      <>{renderCellHeader(key)}</>
                    </Th>
                  </StyledTableCell>
                ))
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {!isLoading ? (
              Object.values(
                (rowsPerPage > 0
                  ? dataState.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : dataState
                ).map((rowData, rowIndex) => (
                  <Row
                    columnConfig={columnConfig}
                    columnConfigKeys={columnConfigKeys}
                    components={components}
                    renderCollapse={renderCollapse}
                    rowData={rowData}
                    rowIndex={rowIndex}
                    onClickCollapse={onClickCollapse}
                    key={rowData.id ?? `${tableName}-${rowIndex}`}
                  />
                ))
              )
            ) : (
              <TableRow style={{ height: 53 * emptyAllData }}>
                <WrapperCell colSpan={columnConfigKeys.length}>
                  Loading...
                </WrapperCell>
              </TableRow>
            )}

            {dataState.length === 0 && (
              <TableRow style={{ height: 53 * emptyAllData }}>
                <WrapperCell colSpan={columnConfigKeys.length}>
                  Nenhum ticket cadastrado
                </WrapperCell>
              </TableRow>
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                labelRowsPerPage=""
                rowsPerPageOptions={[5, 10, 15]}
                colSpan={columnConfigKeys.length}
                count={dataState.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "Pag.",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export default TableApp;
