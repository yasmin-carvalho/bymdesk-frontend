import { EnumStatus } from "./enums";

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
  { value: "Manutenção TI", label: "Manutenção TI" },
  { value: "Manutenção Elétrica", label: "Manutenção Elétrica" },
  { value: "Predial", label: "Predial" },
  { value: "Outros", label: "Outros" },
];
