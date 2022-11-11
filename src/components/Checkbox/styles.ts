import styled from "styled-components";
import { Colors } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;
export const Check = styled.input``;

export const Label = styled.span`
  font-weight: 10px;
  font-size: 10px;
  color: ${Colors.textLabel};
`;
