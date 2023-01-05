import styled from "styled-components";
import { Input } from "../../../../components/Input";
import { ContainerLabel } from "../../../../components/Input/styles";
import { ContainerLabel as ContainerLabelSelect } from "../../../../components/Select/styles";
import { Select } from "../../../../components/Select";
import { Colors } from "../../../../styles/global";

export const Main = styled.main`
  display: flex;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: ${Colors.blue};
  margin-bottom: 35px;
`;

export const StyledInput = styled(Input)`
  ${ContainerLabel} {
    width: 400px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 10px;
  gap: 30px;
  overflow-x: hidden;
`;

export const StyledSelect = styled(Select)`
  width: 100%;

  ${ContainerLabelSelect} {
    width: 400px;
  }
`;
