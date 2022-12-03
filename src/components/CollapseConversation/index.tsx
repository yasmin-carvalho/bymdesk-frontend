import {
  Container,
  WrapperRow,
  Text,
  ContentMessage,
  LabelData,
  Message,
  TextName,
  WrapperMessage,
} from "./styles";

export function CollapseConversation() {
  return (
    <Container>
      <WrapperRow alignContent="left">
        <ContentMessage alignContent="left">
          <TextName>Nome do Cliente</TextName>
          <WrapperMessage alignContent="left">
            <Message>
              Olá tudo bem? ffffffffffffffffffffffffffffffffffffffff dlfkjdlfkj
              sdflksdjflkdsf sdlkfjsdlkjfsd fsldkjflsdkjflksdjflksdnfs f
              sldifjlsdkf sdçfjlskdjflksdjflksdjf sdlkfjsldkjflksdjflksdjflksdf
              lskdjflksdjfçqwkfsd fçlsdlkf sldkflsdm flsd flskdf ksd fjsdnkfj
              sdkjf lsdj fkjsd fkjsd fjla sdkfjs dkfj sdkf skjdfksjdf kj
            </Message>
            <LabelData alignText="right">20/01/2022</LabelData>
          </WrapperMessage>
        </ContentMessage>
      </WrapperRow>

      <WrapperRow alignContent="right">
        <ContentMessage alignContent="left">
          <TextName>Nome do Cliente</TextName>
          <WrapperMessage alignContent="left">
            <Message>
              Olá tudo bem? ffffffffffffffffffffffffffffffffffffffff dlfkjdlfkj
              sdflksdjflkdsf sdlkfjsdlkjfsd fsldkjflsdkjflksdjflksdnfs f
              sldifjlsdkf sdçfjlskdjflksdjflksdjf sdlkfjsldkjflksdjflksdjflksdf
              lskdjflksdjfçqwkfsd fçlsdlkf sldkflsdm flsd flskdf ksd fjsdnkfj
              sdkjf lsdj fkjsd fkjsd fjla sdkfjs dkfj sdkf skjdfksjdf kj
            </Message>
            <LabelData alignText="right">20/01/2022</LabelData>
          </WrapperMessage>
        </ContentMessage>
      </WrapperRow>
    </Container>
  );
}
