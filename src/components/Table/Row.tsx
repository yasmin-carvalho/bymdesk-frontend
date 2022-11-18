/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Collapse, TableRow } from "@mui/material";
import React, { useState } from "react";

import {
  StyledTableRow,
  StyledTableCell,
  TableCellCollapse,
  Container,
  Content,
} from "./styles";
import { ITypeColumnConfig, ITypeComponents } from "./types";

interface RowProps {
  columnConfig: ITypeColumnConfig;
  columnConfigKeys: string[];
  components: ITypeComponents;
  rowData: any;
  rowIndex: number;
  renderCollapse?: () => {};
}

const Row: React.FC<RowProps> = ({
  columnConfig,
  columnConfigKeys,
  components,
  rowData,
  rowIndex,
  renderCollapse,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledTableRow onClick={() => setOpen(!open)}>
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
            <>{renderCollapse()}</>
          </Collapse>
        </TableCellCollapse>
      </TableRow>
    </>
  );
};

export default Row;
