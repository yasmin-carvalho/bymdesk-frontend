import { TableCell, TableRow } from "@mui/material";
import styled from "styled-components";
import { Colors } from "../../styles/global";
import { Input } from "../Input";

interface ITableCell {
  width?: number;
  align?: string;
  borderNone?: boolean;
}

export const StyledTableCell = styled(TableCell).withConfig({
  shouldForwardProp: (prop) => !["width", "align", "borderNone"].includes(prop),
})<ITableCell>`
  border: ${(props) => props.borderNone && "none"} !important;
  text-align: ${(props) => props.align && props.align} !important;
  width: ${(props) => props.width && props.width} !important;
  padding: 16px !important;
`;

export const StyledTableRow = styled(TableRow)`
  & > * {
    border-bottom: none !important;
  }
`;

export const TableCellCollapse = styled(TableCell)`
  padding-bottom: 10px !important;
  padding-top: 0 !important;
  border-top: none !important;
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const StyledInput = styled(Input)`
  width: 100%;
`;
