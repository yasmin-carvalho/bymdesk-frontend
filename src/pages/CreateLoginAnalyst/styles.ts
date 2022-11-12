import styled from "styled-components";

import { Container } from "../../components/Input/styles";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  gap: 20px;
  align-items: center;

  ${Container} {
    gap: 5px;
  }
`;
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
