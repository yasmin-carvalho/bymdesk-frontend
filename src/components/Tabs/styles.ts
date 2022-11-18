import styled from "styled-components";
import { Colors } from "../../styles/global";

interface ILinkBar {
  isActive: boolean;
}

export const PageBar = styled.div`
  display: flex;
  background: ${Colors.lightBlue};
  flex-direction: row;
  width: 100%;
  padding: 25px;
  gap: 60px;
  border: solid 1px var(--blue-border);
`;

export const LinkBar = styled.span<ILinkBar>`
  font-weight: bold;
  color: ${(props) => (props.isActive ? Colors.blue : Colors.textTitle)};
  cursor: pointer;
`;
