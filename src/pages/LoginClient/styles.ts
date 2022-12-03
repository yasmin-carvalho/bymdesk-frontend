import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../styles/global";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 10px;
  width: 400px;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${Colors.textLabel};
`;

export const Image = styled.img`
  width: 400px;
  height: 340px;
`;

export const ChildrenFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: initial;
`;

export const ContainerFooterTwo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 5px;
`;

export const ImageFooter = styled.img`
  width: 22px;
  height: 22px;
`;

export const TextFooter = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${Colors.textTitle};
`;

export const LinkFooter = styled(Link)`
  color: ${Colors.linkFooter};
  font-weight: bold;
  font-size: 14px;
`;
