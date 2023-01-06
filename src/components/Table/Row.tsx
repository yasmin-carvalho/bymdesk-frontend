/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Collapse, TableRow } from "@mui/material";
import React, { useState } from "react";

import { StyledTableRow, StyledTableCell, TableCellCollapse } from "./styles";
import { ITypeColumnConfig, ITypeComponents } from "./types";

interface RowProps {
  columnConfig: ITypeColumnConfig;
  columnConfigKeys: string[];
  components: ITypeComponents;
  rowData: any;
  rowIndex: number;
  renderCollapse?: (rowData: any) => {};
  onClickCollapse?: (id: number, rowData: any) => void;
  loadingCollapse?: boolean;
}

const Row: React.FC<RowProps> = ({
  columnConfig,
  columnConfigKeys,
  components,
  rowData,
  rowIndex,
  renderCollapse,
  onClickCollapse,
  loadingCollapse,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledTableRow
        onClick={() => {
          setOpen(!open);
          if (!open) {
            onClickCollapse(rowData["id"] ?? 0, rowData);
          }
        }}
      >
        {React.Children.toArray(
          columnConfigKeys.map((key) => (
            <StyledTableCell
              align={columnConfig[key]?.align}
              width={columnConfig[key]?.width}
            >
              {components[key] &&
                components[key](rowData[key], rowData, rowIndex)}
            </StyledTableCell>
          ))
        )}
      </StyledTableRow>

      <TableRow>
        <TableCellCollapse colSpan={columnConfigKeys.length}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <>
              {loadingCollapse ? (
                <div>Loading ...</div>
              ) : (
                <>{renderCollapse(rowData)}</>
              )}
            </>
          </Collapse>
        </TableCellCollapse>
      </TableRow>
    </>
  );
};

export default Row;
