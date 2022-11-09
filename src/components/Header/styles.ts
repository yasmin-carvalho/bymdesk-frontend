import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  padding: 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 20%;
    background-color: #fff;
    padding: 1rem 1rem 1rem;
  }

  p {
    text-align: right;
    width: 94%;
  }
`;
