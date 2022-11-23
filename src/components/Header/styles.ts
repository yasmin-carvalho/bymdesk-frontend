import { Colors } from "./../../styles/global";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: ${Colors.blue};
  padding: 16px;
`;

export const Image = styled.img`
  height: 100px;
`;

export const Content = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  color: ${Colors.white};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Text = styled.span`
  text-align: right;
  display: block;
  margin-bottom: 3px;
`;

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: ${Colors.blue};
  gap: 10px;
`;

export const ContentTextLogo = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
`;
export const TextLogo = styled.span`
  font-weight: 700;
  font-size: 40px;
  color: ${Colors.white};
  font-family: "Exo 2", Helvetica, Arial, Impact, sans-serif;
`;
export const TextLogoTwo = styled.span`
  font-weight: 700;
  font-size: 15px;
  color: ${Colors.white};
  font-family: "Exo 2", Helvetica, Arial, Impact, sans-serif;
`;

export const ContainerPageAnalyst = styled.div`
  display: flex;
  align-items: Right;
  flex-direction: column;
  gap: 5px;
  color: ${Colors.white};
  margin-top: 8px;
`;
export const ContentPageAnalyst = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const TextDecoration = styled.span`
  text-align: right;
  display: block;
  margin-bottom: 3px;
  text-decoration: underline overline;
`;
