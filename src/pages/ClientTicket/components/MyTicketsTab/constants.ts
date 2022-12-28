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
  { searchPropertName: columnType.NAME, placeholder: "ticket", type: "number" },
  { searchPropertName: columnType.BLOCK, placeholder: "bloco", type: "string" },
  {
    searchPropertName: columnType.LOCALE,
    placeholder: "local",
    type: "string",
  },
  { searchPropertName: columnType.TYPE, placeholder: "tipo", type: "string" },
  {
    searchPropertName: columnType.STATUS,
    placeholder: "status",
    type: "string",
  },
];

export const data = [
  {
    id: 1,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Inicializado",
  },
  {
    id: 2,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Finalizado",
  },
  {
    id: 3,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Andamento",
  },
  {
    id: 4,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em Elétrica",
    status: "Cancelado",
  },
  {
    id: 5,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Inicializado",
  },
  {
    id: 6,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em Mecânica",
    status: "Inicializado",
  },
  {
    id: 7,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Inicializado",
  },
  {
    id: 8,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Inicializado",
  },
  {
    id: 9,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Predial",
    status: "Inicializado",
  },
  {
    id: 10,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Inicializado",
  },
  {
    id: 11,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Predial",
    status: "Inicializado",
  },
  {
    id: 12,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Inicializado",
  },
  {
    id: 13,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Inicializado",
  },
  {
    id: 14,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Inicializado",
  },
  {
    id: 15,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Inicializado",
  },
  {
    id: 16,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Inicializado",
  },
  {
    id: 17,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
    status: "Inicializado",
  },
];
