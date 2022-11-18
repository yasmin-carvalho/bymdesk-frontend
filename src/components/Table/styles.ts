import { TableCell, TableRow } from "@mui/material";
import styled from "styled-components";
import { Colors } from "../../styles/global";

interface ITableCell {
  width?: number;
  align?: string;
  borderNone?: boolean;
}

export const StyledTableCell = styled(TableCell).withConfig({
  shouldForwardProp: (prop) => !["width", "align", "borderNone"].includes(prop),
})<ITableCell>`
  border: ${(props) => props.borderNone && "none"};
  text-align: ${(props) => props.align && props.align};
  width: ${(props) => props.width && props.width};
  padding: 16px 16px 0 16px !important;
`;

export const StyledTableRow = styled(TableRow)`
  & > * {
    border-bottom: none !important;
  }
`;

export const TableCellCollapse = styled(TableCell)`
  padding-bottom: 10px;
  padding-top: 0;
  border-top: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Th = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
  color: ${Colors.blueButton};
`;
