import styled, { css } from "styled-components";
import { Colors } from "../../styles/global";

interface IWrapperRow {
  alignContent: "left" | "right";
}

interface ILabelData {
  alignText: "left" | "right" | "center";
}

interface IContentMessage {
  alignContent: "left" | "right";
}

interface IWrapperMessage {
  alignContent: "left" | "right";
}

interface IWrapperRow {
  alignContent: "left" | "right";
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background: ${Colors.lightGray};

  height: 300px;
  overflow-y: scroll;
`;

export const WrapperRow = styled.div<IWrapperRow>`
  display: flex;
  flex: 1;
  justify-content: ${(props) => props.alignContent && props.alignContent};

  ${({ alignContent }) =>
    alignContent === "left"
      ? css`
          margin-right: 80px;
        `
      : css`
          margin-left: 80px;
        `}
`;

export const ContentMessage = styled.div<IContentMessage>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: ${(props) => props.alignContent === "right" && 1};
  justify-content: ${(props) => props.alignContent && props.alignContent};
`;

export const LabelData = styled.span<ILabelData>`
  font-size: 12px;
  font-weight: 400;
  color: ${Colors.textTitle};
  text-align: ${(props) => props.alignText && props.alignText};
`;

export const TextName = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${Colors.black};
  font-weight: 700;
  padding-top: 8px;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  border-radius: 5px;
  border: solid 1px ${Colors.black};

  padding: 10px;
  background: ${Colors.white};
`;

export const WrapperMessage = styled.div<IWrapperMessage>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: right;
  width: ${(props) => props.alignContent === "left" && "fit-content"};
`;

export const Text = styled.span`
  background-color: #fff;
`;
