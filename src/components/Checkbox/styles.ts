import styled from "styled-components";
import { Colors } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;
export const Check = styled.input`
  height: 15px;
  width: 15px;
  border-radius: 4px;
`;

export const Label = styled.span`
  font-weight: 12px;
  font-size: 12px;
  color: ${Colors.textLabel};
`;
