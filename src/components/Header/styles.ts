import { Colors } from "./../../styles/global";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: ${Colors.blue};
  padding: 12px 12px 12px 20px;
`;

export const Image = styled.img`
  width: 320px;
  height: 120px;
`;

export const Content = styled.div`
  background: ${Colors.white};
  padding: 15px;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const Text = styled.span`
  text-align: right;
  display: block;
  margin-bottom: 3px;
`;
