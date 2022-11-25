import styled from "styled-components";
import { Colors } from "../../styles/global";
import SearchIcon from "@mui/icons-material/Search";

interface IContainer {
  isRow: boolean;
}

interface IStyledInput {
  isSearch: boolean;
}

interface IContainerLabel {
  isRow: boolean;
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: ${(props) => (props.isRow ? "row" : "column")};
  gap: 5px;
  align-items: center;

  input[type="file"] {
    display: none;
  }

  label {
    color: ${Colors.blueButton};
    font-weight: bold;
    font-size: 14px;
  }
`;

export const ContainerLabel = styled.div<IContainerLabel>`
  display: flex;
  flex-direction: row;
  width: ${(props) => (props.isRow ? "220px" : "100%")};
  gap: 5px;
`;

export const Label = styled.span`
  font-weight: 16px;
  font-size: 14px;
  color: ${Colors.textLabel};
`;
export const Asterisco = styled.span`
  color: red;
`;

export const StyledInput = styled.input<IStyledInput>`
  border-radius: ${(props) => props.isSearch && "6px"};
  border: ${(props) => props.isSearch && "none"};
  border: solid 0.2px ${Colors.textBody};
  height: 30px;
  width: 100%;
  text-indent: ${(props) => (props.isSearch ? "30px" : "6px")};
  position: ${(props) => props.isSearch && "relative"};

  :focus {
    outline: solid 0.1px ${Colors.textBody};
  }
`;

export const ContentInputFile = styled.div`
  width: 100%;
  label {
    cursor: pointer;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 10px;
  height: 10px;
  float: left;
  z-index: 1;
  position: absolute;
  margin-left: 3px;
  color: ${Colors.textTitle};
`;
