import styled from "styled-components";
import ReactSelect from "react-select";

import { Colors } from "../../styles/global";

interface IContainer {
  isRow: boolean;
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: ${(props) => (props.isRow ? "row" : "column")};
  gap: 5px;
`;

export const ContainerLabel = styled.div`
  display: flex;
  flex-direction: row;
  width: 220px;
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

export const StyledSelect = styled.select`
  height: 30px;
  width: 100%;

  ::placeholder {
    padding-left: 5px;
  }

  :focus {
    outline: solid 0.1px ${Colors.blueButton};
  }
`;

export const StyledReactSelect = styled(ReactSelect)`
  height: 30px;
  width: 100%;
  margin-bottom: 5px;

  ::placeholder {
    padding-left: 5px;
  }

  :focus {
    outline: solid 0.1px ${Colors.blueButton};
  }
`;

export const Optin = styled.option``;
