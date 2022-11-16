import styled from "styled-components";
import { Colors } from "../../styles/global";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  gap: 50px;
`;

export const PageBar = styled.div`
  display: flex;
  background: ${Colors.lightBlue};
  flex-direction: row;
  width: 100%;
  padding: 25px;
  gap: 60px;
  border: solid 1px var(--blue-border);
`;

export const LinkBar = styled.a`
  font-weight: bold;
  color: black;
`;

export const BlockTicket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 900px;
  padding: 40px;
  background: ${Colors.white};
  border: solid 1px ${Colors.blueBorder};
  gap: 20px;
`;

export const Text = styled.span`
  font-size: 14px;
  color: ${Colors.textLabel};
  font-weight: bold;
`;

export const DivLinkBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LinkBlock = styled.a`
  color: ${Colors.blueButton};
  font-weight: bold;
  font-size: 12px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: left;
`;
