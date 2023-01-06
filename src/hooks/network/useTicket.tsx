import { useState } from "react";
import { UseFormReset } from "react-hook-form";
import { ToastType } from "../../components/Snackbar/enumToast";
import {
  EnumStatus,
  EnumTypeTicket,
  EnumTypeUser,
} from "../../constants/enums";
import { IFormRegisterTicket } from "../../dtos/IRegisterTicketDTO";
import { ITicketsDTO } from "../../dtos/ITicketsDTO";
import TicketsService from "../../services/TicketsService";
import { useAuth } from "../useAuth";
import { useLoading } from "../useLoading";
import { useToast } from "../useToast";

export function useTicket() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();
  const { id, setor, role } = useAuth();

  const ticketsService = new TicketsService();

  const [allTickets, setAllTickets] = useState<ITicketsDTO[]>([]);

  const onSubmitRegisterTicket = async (
    dataForm: IFormRegisterTicket,
    reset: UseFormReset<IFormRegisterTicket>
  ) => {
    setLoading(true);

    try {
      await ticketsService.postTickets({
        solicitante_id: id,
        bloco_id: Number(dataForm.bloco.value),
        imagem: dataForm.imagem,
        local_id: Number(dataForm.local_id.value),
        status: EnumStatus.Inicializado,
        tipo: dataForm.tipo.value,
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

  const getUnsolvedTickets = async (setor?: EnumTypeTicket) => {
    setLoading(true);
    try {
      const response = await ticketsService.getTickets();
      if (setor) {
        setAllTickets(
          response
            .filter(
              (item) =>
                item.status === EnumStatus.Inicializado ||
                item.status === EnumStatus.Andamento
            )
            .filter((item) => item.tipo === setor)
        );
      } else {
        setAllTickets(
          response.filter(
            (item) =>
              item.status === EnumStatus.Inicializado ||
              item.status === EnumStatus.Andamento
          )
        );
      }
    } catch (error) {
      addToast("Falha ao buscar dados de tickets", ToastType.error);
    } finally {
      setLoading(false);
    }
  };

  const getResolvedTickets = async (setor?: EnumTypeTicket) => {
    setLoading(true);
    try {
      const response = await ticketsService.getTickets();
      if (setor) {
        setAllTickets(
          response
            .filter(
              (item) =>
                item.status === EnumStatus.Finalizado ||
                item.status === EnumStatus.Cancelado
            )
            .filter((item) => item.tipo === setor)
        );
      } else {
        setAllTickets(
          response.filter(
            (item) =>
              item.status === EnumStatus.Finalizado ||
              item.status === EnumStatus.Cancelado
          )
        );
      }
    } catch (error) {
      addToast("Falha ao buscar dados de tickets", ToastType.error);
    } finally {
      setLoading(false);
    }
  };

  const getTicketsAll = async (solicitante_id?: number) => {
    setLoading(true);
    try {
      const response = await ticketsService.getTickets();
      if (solicitante_id) {
        setAllTickets(
          response.filter((item) => item.solicitante_id === solicitante_id)
        );
      } else {
        setAllTickets(response);
      }
    } catch (error) {
      addToast("Falha ao buscar dados de tickets", ToastType.error);
    } finally {
      setLoading(false);
    }
  };

  const putTicket = async (
    { status, id: ticket_id }: ITicketsDTO,
    isGetTicket: "resolved" | "unsolved" | "all"
  ) => {
    setLoading(true);
    try {
      await ticketsService.putTickets({ analista_id: id, status, ticket_id });
      addToast("Ticket atualizado com sucesso!", ToastType.success);

      if (isGetTicket === "all") {
        await getTicketsAll();
      } else if (isGetTicket === "resolved") {
        await getResolvedTickets(
          role === EnumTypeUser.ANALISTA ? setor : undefined
        );
      } else {
        await getUnsolvedTickets(
          role === EnumTypeUser.ANALISTA ? setor : undefined
        );
      }
    } catch (error) {
      addToast(`Erro ao atualizar ticket!`, ToastType.error);
    } finally {
      setLoading(false);
    }
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
