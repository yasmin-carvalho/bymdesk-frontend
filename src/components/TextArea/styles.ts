import styled from "styled-components";
import { Colors } from "../../styles/global";

interface IContainer {
  isRow: boolean;
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: ${(props) => (props.isRow ? "row" : "column")};
  gap: 20px;
`;

export const ContainerLabel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
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

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  ::placeholder {
    padding-left: 5px;
  }
`;
