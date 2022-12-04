import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 60px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  gap: 20px;
  align-items: left;
`;
export const FormRight = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  width: 600px;
  gap: 10px;
  margin-top: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 10px;
`;
