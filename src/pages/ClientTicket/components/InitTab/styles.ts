import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { Colors } from "../../../../styles/global";

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

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: right;
`;

export const StyledButton = styled(Button)`
  width: 200px;
`;

export const Text = styled.span`
  font-size: 14px;
  color: ${Colors.textLabel};
  font-weight: bold;
`;
