import { useRef, useState } from "react";
import { ToastType } from "../../components/Snackbar/enumToast";

import MessageService from "../../services/MessageService";
import { IGetMessageDTOResponse } from "../../services/MessageService/dtos/IGetMessageDTOResponse";
import { useToast } from "../useToast";

export function useMessage() {
  const { addToast } = useToast();
  const refLoadingMessage = useRef(false);

  const messageService = new MessageService();

  const [messagesState, setMessagesState] = useState<IGetMessageDTOResponse[]>(
    []
  );

  const getMessages = async (idTicket: number) => {
    refLoadingMessage.current = true;

    try {
      const response = await messageService.getMessages(idTicket);
      setMessagesState(response);
    } catch (error) {
      addToast("Erro ao buscar dados de messagens", ToastType.error);
    } finally {
      refLoadingMessage.current = false;
    }
  };

  return {
    refLoadingMessage,
    messagesState,
    getMessages,
  };
}
