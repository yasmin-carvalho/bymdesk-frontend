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
import React, { useState } from "react";
import { Input } from "../Input";

import { TablePaginationActions } from "../total-pagination-actions/TotalPaginationActions";
import Row from "./Row";
import { StyledTableCell, Th, Wrapper } from "./styles";
import { ITypeColumnConfig, ITypeComponents } from "./types";

interface TableAppProps {
  tableName: string;
  columnConfig: ITypeColumnConfig;
  data: any[];
  components: ITypeComponents;
  // eslint-disable-next-line @typescript-eslint/ban-types
  renderCellHeader: (key: string) => {};
  // eslint-disable-next-line @typescript-eslint/ban-types
  renderCollapse?: () => {};
}

const TableApp: React.FC<TableAppProps> = ({
  tableName,
  columnConfig,
  data,
  components,
  renderCellHeader,
  renderCollapse,
}) => {
  const columnConfigKeys = [
    ...Object.entries(columnConfig).map(([key, value]) => key),
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyAllData =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

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

  return (
    <>
      <Wrapper>
        <Input isSearch isRow placeholder="Pesquisar Ticket" />
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
              {Object.values(
                (rowsPerPage > 0
                  ? data.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : data
                ).map((rowData, rowIndex) => (
                  <Row
                    columnConfig={columnConfig}
                    columnConfigKeys={columnConfigKeys}
                    components={components}
                    renderCollapse={renderCollapse}
                    rowData={rowData}
                    rowIndex={rowIndex}
                    key={rowData.id ?? `${tableName}-${rowIndex}`}
                  />
                ))
              )}
              {emptyAllData > 0 && (
                <TableRow style={{ height: 53 * emptyAllData }}>
                  <TableCell colSpan={columnConfigKeys.length} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  labelRowsPerPage=""
                  rowsPerPageOptions={[5, 10, 15]}
                  colSpan={columnConfigKeys.length}
                  count={data.length}
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
    </>
  );
};

export default TableApp;
