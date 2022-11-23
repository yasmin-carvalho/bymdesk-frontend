import styled, { keyframes } from "styled-components";
import { Colors } from "../../styles/global";

interface ILinkBar {
  isActive: boolean;
}

const animeBottomToTop = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const PageBar = styled.div`
  display: flex;
  background: ${Colors.lightBlueUnifei};
  flex-direction: row;
  width: 100%;
  padding: 15px;
  gap: 60px;
  border: solid 1px ${Colors.blueBorder};
  border-radius: 4px;
`;

export const LinkBar = styled.span<ILinkBar>`
  font-weight: bold;
  color: ${(props) => (props.isActive ? Colors.blueBar : Colors.black)};
  cursor: pointer;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  opacity: 0;
  transform: translateX(20px);
  animation: ${animeBottomToTop} 0.5s both;
`;

export const ContentLinkBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Divider = styled.hr`
  height: 3px;
  background-color: ${Colors.blueButton};
  width: 100%;
`;
