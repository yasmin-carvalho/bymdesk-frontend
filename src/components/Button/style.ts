import styled from "styled-components";
import { Colors } from "../../styles/global";

interface IStyledButton {
  bgColor?: string;
}

export const StyledButton = styled.button<IStyledButton>`
  list-style: none;
  color: #fff;
  background: ${(props) => props.bgColor ?? "#3D4FBE"};
  border: solid 1px ${Colors.blueBorder};
  transition: filter 0.2s;
  padding: 0 1rem;
  border-radius: 0.25rem;
  height: 2rem;

  &:hover {
    filter: brightness(0.9);
  }
`;
