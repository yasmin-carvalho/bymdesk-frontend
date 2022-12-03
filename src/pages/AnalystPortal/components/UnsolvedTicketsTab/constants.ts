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
  REQUESTER: "requester",
  STATUS: "status",
};

export const columnConfig: ITypeColumnConfig = {
  [columnType.NAME]: { order: 1 },
  [columnType.BLOCK]: { order: 2 },
  [columnType.LOCALE]: { order: 3 },
  [columnType.REQUESTER]: { order: 4 },
  [columnType.STATUS]: { order: 4 },
};

export const columnLabel: ITypeColumnLabel = {
  [columnType.NAME]: "Ticket",
  [columnType.BLOCK]: "Bloco",
  [columnType.LOCALE]: "Local",
  [columnType.REQUESTER]: "Solicitante",
  [columnType.STATUS]: "Status",
};

export const arrayRenderInputSearch: IRenderInputSearch[] = [
  { searchPropertName: columnType.NAME, placeholder: "ticket" },
  { searchPropertName: columnType.BLOCK, placeholder: "bloco" },
  { searchPropertName: columnType.LOCALE, placeholder: "local" },
  { searchPropertName: columnType.REQUESTER, placeholder: "solicitante" },
  { searchPropertName: columnType.STATUS, placeholder: "status" },
];

export const data = [
  {
    id: 1,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 2,
    name: "#Ticket - 033",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 3,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 4,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 5,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 6,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 7,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 8,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 9,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 10,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 11,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 12,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 13,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 14,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 15,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 16,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
  {
    id: 17,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    requester: "Ana Maria",
    status: "Inicializado",
  },
];
