import {
  IRenderInputSearch,
  ITypeColumnConfig,
  ITypeColumnLabel,
  ITypeColumnType,
} from "../../../../components/Table/types";

// Table Row --------------------------
export const columnType: ITypeColumnType = {
  NAME: "name",
  BLOCK: "block",
  LOCALE: "locale",
  TYPE: "type",
};

export const columnConfig: ITypeColumnConfig = {
  [columnType.NAME]: { order: 1 },
  [columnType.BLOCK]: { order: 2, align: "center" },
  [columnType.LOCALE]: { order: 3, align: "center" },
  [columnType.TYPE]: { order: 4 },
};

export const columnLabel: ITypeColumnLabel = {
  [columnType.NAME]: "Ticket",
  [columnType.BLOCK]: "Bloco",
  [columnType.LOCALE]: "Local",
  [columnType.TYPE]: "Tipo",
};

export const arrayRenderInputSearch: IRenderInputSearch[] = [
  { searchPropertName: columnType.NAME, placeholder: "ticket" },
  { searchPropertName: columnType.BLOCK, placeholder: "bloco" },
  { searchPropertName: columnType.LOCALE, placeholder: "local" },
  { searchPropertName: columnType.TYPE, placeholder: "tipo" },
];

export const data = [
  {
    id: 1,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 2,
    name: "#Ticket - 033",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 3,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 4,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em Elétrica",
  },
  {
    id: 5,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 6,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em Mecânica",
  },
  {
    id: 7,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 8,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 9,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Predial",
  },
  {
    id: 10,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 11,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Predial",
  },
  {
    id: 12,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 13,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 14,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 15,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 16,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 17,
    name: "#Ticket - 032",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
];
