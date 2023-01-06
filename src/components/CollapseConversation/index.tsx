import { Button } from "../Button";
import incidentes from "../../assets/images.png";
import {
  Container,
  WrapperRow,
  ContentMessage,
  LabelData,
  Message,
  TextName,
  WrapperMessage,
  ContentTextInput,
  InputComponent,
  Image,
} from "./styles";
import { IGetMessageDTOResponse } from "../../services/MessageService/dtos/IGetMessageDTOResponse";

interface CollapseConversationProps {
  dataList?: IGetMessageDTOResponse[];
}

export function CollapseConversation({ dataList }: CollapseConversationProps) {
  console.log(dataList);

  return (
    <>
      <Container>
        <WrapperRow alignContent="left">
          <ContentMessage alignContent="left">
            <TextName>Nome do Cliente</TextName>
            <WrapperMessage alignContent="left">
              <Message>
                Olá tudo bem? ffffffffffffffffffffffffffffffffffffffff
                dlfkjdlfkj sdflksdjflkdsf sdlkfjsdlkjfsd
                fsldkjflsdkjflksdjflksdnfs f sldifjlsdkf sdçfjlskdjflksdjflksdjf
                sdlkfjsldkjflksdjflksdjflksdf lskdjflksdjfçqwkfsd fçlsdlkf
                sldkflsdm flsd flskdf ksd fjsdnkfj sdkjf lsdj fkjsd fkjsd fjla
                sdkfjs dkfj sdkf skjdfksjdf kj
              </Message>
              <LabelData alignText="right">20/01/2022</LabelData>
              <Image src={incidentes} alt="img-logoIncidentes" />
              <LabelData alignText="left">20/01/2022</LabelData>
            </WrapperMessage>
          </ContentMessage>
        </WrapperRow>

        <WrapperRow alignContent="right">
          <ContentMessage alignContent="left">
            <TextName>Nome do Analista</TextName>
            <WrapperMessage alignContent="left">
              <Message>
                Olá tudo bem? ffffffffffffffffffffffffffffffffffffffff
                dlfkjdlfkj sdflksdjflkdsf sdlkfjsdlkjfsd
                fsldkjflsdkjflksdjflksdnfs f sldifjlsdkf sdçfjlskdjflksdjflksdjf
                sdlkfjsldkjflksdjflksdjflksdf lskdjflksdjfçqwkfsd fçlsdlkf
                sldkflsdm flsd flskdf ksd fjsdnkfj sdkjf lsdj fkjsd fkjsd fjla
                sdkfjs dkfj sdkf skjdfksjdf kj
              </Message>
              <LabelData alignText="right">20/01/2022</LabelData>
            </WrapperMessage>
          </ContentMessage>
        </WrapperRow>
      </Container>
      <ContentTextInput>
        <InputComponent placeholder="Envie sua mensagem" />
        <Button>Enviar</Button>
      </ContentTextInput>
    </>
  );
}
