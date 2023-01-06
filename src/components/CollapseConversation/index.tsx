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
import { ITicketsDTO } from "../../dtos/ITicketsDTO";

interface CollapseConversationProps {
  dataList?: IGetMessageDTOResponse[];
  dataTicket?: ITicketsDTO;
}

export function CollapseConversation({
  dataList,
  dataTicket,
}: CollapseConversationProps) {
  console.log("dataList", dataList);
  console.log("dataTicket", dataTicket);

  return (
    <>
      <Container>
        {dataList?.map((item) => (
          <WrapperRow alignContent="left" key={item.id}>
            <ContentMessage alignContent="left">
              <TextName>Nome do Cliente</TextName>
              <WrapperMessage alignContent="left">
                <Message>{item?.mensagem}</Message>
                <LabelData alignText="right">20/01/2022</LabelData>
                <Image src={item?.imagem} alt="img-logoIncidentes" />
                <LabelData alignText="left">20/01/2022</LabelData>
              </WrapperMessage>
            </ContentMessage>
          </WrapperRow>
        ))}

        {/* <WrapperRow alignContent="right">
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
        </WrapperRow> */}
      </Container>
      <ContentTextInput>
        <InputComponent placeholder="Envie sua mensagem" />
        <Button>Enviar</Button>
      </ContentTextInput>
    </>
  );
}
