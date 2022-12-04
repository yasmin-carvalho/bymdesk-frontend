import styled from "styled-components";

interface ContentProps {
  alignRight?: boolean;
}

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  gap: 10px;

  width: ${(props) => props.alignRight && "100%"};
  justify-content: ${(props) => props.alignRight && "right"};
`;
