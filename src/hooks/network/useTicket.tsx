import { useState } from "react";
import { UseFormReset } from "react-hook-form";
import { ToastType } from "../../components/Snackbar/enumToast";
import { EnumStatus } from "../../constants/enums";
import { IFormRegisterTicket } from "../../dtos/IRegisterTicketDTO";
import { ITicketsDTO } from "../../dtos/ITicketsDTO";
import TicketsService from "../../services/TicketsService";
import { useAuth } from "../useAuth";
import { useLoading } from "../useLoading";
import { useToast } from "../useToast";

export function useTicket() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();
  const { id } = useAuth();

  const ticketsService = new TicketsService();

  const [allTickets, setAllTickets] = useState<ITicketsDTO[]>([]);

  const onSubmitRegisterTicket = async (
    dataForm: IFormRegisterTicket,
    reset: UseFormReset<IFormRegisterTicket>
  ) => {
    setLoading(true);
    console.log(dataForm?.bloco?.value);
    console.log(dataForm?.local?.value);

    try {
      await ticketsService.postTickets({
        solicitante_id: id,
        bloco_id: Number(dataForm.bloco.value),
        imagem: dataForm.anexar_arquivo,
        local_id: Number(dataForm.local.value),
        status: EnumStatus.Inicializado,
        tipo: dataForm.tipo_de_mautencao.value,
        descricao: dataForm.descricao,
      });
      addToast("Ticket cadastrado com sucesso!", ToastType.success);
    } catch (error) {
      console.log(error);
      addToast("ERRO!", ToastType.error);
    } finally {
      setLoading(false);
      reset();
    }
  };

  const getUnsolvedTickets = async () => {
    setLoading(true);
    try {
      const response = await ticketsService.getTickets();
      setAllTickets(
        response.filter(
          (item) =>
            item.status === EnumStatus.Inicializado ||
            item.status === EnumStatus.Andamento
        )
      );
    } catch (error) {
      addToast("Falha ao buscar dados de tickets", ToastType.error);
    } finally {
      setLoading(false);
    }
  };

  const getResolvedTickets = async () => {
    setLoading(true);
    try {
      const response = await ticketsService.getTickets();
      setAllTickets(
        response.filter(
          (item) =>
            item.status === EnumStatus.Finalizado ||
            item.status === EnumStatus.Cancelado
        )
      );
    } catch (error) {
      addToast("Falha ao buscar dados de tickets", ToastType.error);
    } finally {
      setLoading(false);
    }
  };

  const getTicketsAll = async () => {
    setLoading(true);
    try {
      const response = await ticketsService.getTickets();
      setAllTickets(response);
    } catch (error) {
      addToast("Falha ao buscar dados de tickets", ToastType.error);
    } finally {
      setLoading(false);
    }
  };

  const putTicket = async (
    { analista_id, status, id }: ITicketsDTO,
    isGetTicket: "resolved" | "unsolved" | "all"
  ) => {
    setLoading(true);
    try {
      await ticketsService.putTickets({ analista_id, status, ticket_id: id });
      addToast("Ticket atualizado com sucesso!", ToastType.success);

      if (isGetTicket === "all") {
        await getTicketsAll();
      } else if (isGetTicket === "resolved") {
        await getResolvedTickets();
      } else {
        await getUnsolvedTickets();
      }
    } catch (error) {
      addToast(`Erro ao atualizar ticket!`, ToastType.error);
    }

    setLoading(false);
  };

  return {
    loading,
    setLoading,
    onSubmitRegisterTicket,
    getUnsolvedTickets,
    getResolvedTickets,
    getTicketsAll,
    putTicket,
    allTickets,
  };
}
