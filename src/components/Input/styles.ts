import styled from "styled-components";
import { Colors } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
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

export const StyledInput = styled.input`
  height: 30px;
  width: 100%;

  ::placeholder {
    padding-left: 5px;
  }
`;
