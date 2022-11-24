import styled from "styled-components";
import { Colors } from "../../../../styles/global";

export const Main = styled.main`
  display: flex;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  gap: 10px;
`;

export const Text = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: ${Colors.blue};
  margin-bottom: 35px;
  margin-top: 30px;
`;
