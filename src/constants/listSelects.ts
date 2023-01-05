import { EnumStatus, EnumTypeTicket } from "./enums";

interface OptionSelect {
  value: string;
  label: string;
}

export const optionsStatus: Array<string> = [
  EnumStatus.Inicializado,
  EnumStatus.Andamento,
  EnumStatus.Finalizado,
  EnumStatus.Cancelado,
];

export const optionsSetor: Array<OptionSelect> = [
  { value: EnumTypeTicket.ManutencaoTI, label: EnumTypeTicket.ManutencaoTI },
  {
    value: EnumTypeTicket.ManutencaoEletrica,
    label: EnumTypeTicket.ManutencaoEletrica,
  },
  {
    value: EnumTypeTicket.ManutencaoPredial,
    label: EnumTypeTicket.ManutencaoPredial,
  },
  { value: EnumTypeTicket.Outros, label: EnumTypeTicket.Outros },
];
