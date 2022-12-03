import {
  IRenderInputSearch,
  ITypeColumnConfig,
  ITypeColumnLabel,
} from "../../../../components/Table/types";

// Table Row --------------------------
export const columnType = {
  NAME: "name",
  BLOCK: "block",
  LOCALE: "locale",
  TYPE: "type",
  STATUS: "status",
};

export const columnConfig: ITypeColumnConfig = {
  [columnType.NAME]: { order: 1 },
  [columnType.BLOCK]: { order: 2 },
  [columnType.LOCALE]: { order: 3 },
  [columnType.TYPE]: { order: 4 },
  [columnType.STATUS]: { order: 5 },
};

export const columnLabel: ITypeColumnLabel = {
  [columnType.NAME]: "Ticket",
  [columnType.BLOCK]: "Bloco",
  [columnType.LOCALE]: "Local",
  [columnType.TYPE]: "Tipo",
  [columnType.STATUS]: "Status",
};

export const arrayRenderInputSearch: IRenderInputSearch[] = [
  { searchPropertName: columnType.NAME, placeholder: "ticket" },
  { searchPropertName: columnType.BLOCK, placeholder: "bloco" },
  { searchPropertName: columnType.LOCALE, placeholder: "local" },
  { searchPropertName: columnType.TYPE, placeholder: "tipo" },
  { searchPropertName: columnType.STATUS, placeholder: "status" },
];

export const data = [
  {
    id: 1,
    name: "#Ticket - 030",
    block: "#Bloco:C0 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Andamento",
  },
  {
    id: 2,
    name: "#Ticket - 031",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Cancelado",
  },
  {
    id: 3,
    name: "#Ticket - 032",
    block: "#Bloco:C2 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Finalizado",
  },
  {
    id: 4,
    name: "#Ticket - 033",
    block: "#Bloco:C3 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em Elétrica",
    status: "Finalizado",
  },
  {
    id: 5,
    name: "#Ticket - 034",
    block: "#Bloco:C4 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Finalizado",
  },
  {
    id: 6,
    name: "#Ticket - 035",
    block: "#Bloco:C5 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em Mecânica",
    status: "Finalizado",
  },
  {
    id: 7,
    name: "#Ticket - 036",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Finalizado",
  },
  {
    id: 8,
    name: "#Ticket - 037",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Finalizado",
  },
  {
    id: 9,
    name: "#Ticket - 038",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Predial",
    status: "Finalizado",
  },
  {
    id: 10,
    name: "#Ticket - 039",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Finalizado",
  },
  {
    id: 11,
    name: "#Ticket - 040",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Predial",
    status: "Finalizado",
  },
  {
    id: 12,
    name: "#Ticket - 041",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Finalizado",
  },
  {
    id: 13,
    name: "#Ticket - 042",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Finalizado",
  },
  {
    id: 14,
    name: "#Ticket - 043",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Finalizado",
  },
  {
    id: 15,
    name: "#Ticket - 044",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Finalizado",
  },
  {
    id: 16,
    name: "#Ticket - 045",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Finalizado",
  },
  {
    id: 17,
    name: "#Ticket - 046",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Finalizado",
  },
];
