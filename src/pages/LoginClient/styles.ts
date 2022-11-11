import styled from "styled-components";
import { Colors } from "../../styles/global";

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
  align-items: center;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 35px;
  color: ${Colors.textTitle};
`;

export const SubTitle = styled.span`
  font-weight: 300;
  font-size: 12px;
  color: ${Colors.textTitle};
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 10px;
  width: 400px;
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: ${Colors.textLabel};
`;

export const Image = styled.img`
  width: 430px;
  height: 360px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: initial;
  width: 100%;
  padding: 20px 20px 25px 70px;
`;

export const ContainerFooterTwo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 5px;
`;

export const ImageFooter = styled.img`
  width: 35px;
  height: 35px;
`;

export const TextFooter = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: ${Colors.textTitle};
`;

export const LinkFooter = styled.a`
  color: ${Colors.linkFooter};
  font-weight: bold;
`;
