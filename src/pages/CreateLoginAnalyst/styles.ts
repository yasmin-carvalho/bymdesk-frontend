import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 60px;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  gap: 20px;
  align-items: left;
`;
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  width: 600px;
  gap: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 700px;
  gap: 8px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: initial;
  width: 100%;
  padding: 20px 20px 25px 70px;
`;
