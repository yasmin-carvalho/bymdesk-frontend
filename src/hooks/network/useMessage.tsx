import { useState } from "react";
import { ToastType } from "../../components/Snackbar/enumToast";

import MessageService from "../../services/MessageService";
import { IGetMessageDTOResponse } from "../../services/MessageService/dtos/IGetMessageDTOResponse";
import { useToast } from "../useToast";

export function useMessage() {
  const { addToast } = useToast();
  const [loadingMessage, setLoadingMessage] = useState(false);

  const messageService = new MessageService();

  const [messagesState, setMessagesState] = useState<IGetMessageDTOResponse[]>(
    []
  );

  const getMessages = async (idTicket: number) => {
    setLoadingMessage(true);

    try {
      const response = await messageService.getMessages(idTicket);
      setMessagesState(response);
    } catch (error) {
      addToast("Erro ao buscar dados de messagens", ToastType.error);
    } finally {
      setLoadingMessage(false);
    }
  };

  return {
    loadingMessage,
    messagesState,
    getMessages,
  };
}
