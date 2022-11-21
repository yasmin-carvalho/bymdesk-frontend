import styled from "styled-components";
import { Colors } from "../../../../styles/global";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;

export const Text = styled.h1`
  color: ${Colors.blue};
`;
