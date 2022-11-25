import {
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

export const data = [
  {
    id: 1,
    name: "#Ticket - 030",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 2,
    name: "#Ticket - 031",
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
    name: "#Ticket - 033",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em Elétrica",
  },
  {
    id: 5,
    name: "#Ticket - 034",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 6,
    name: "#Ticket - 035",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em Mecânica",
  },
  {
    id: 7,
    name: "#Ticket - 036",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 8,
    name: "#Ticket - 037",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 9,
    name: "#Ticket - 038",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Predial",
  },
  {
    id: 10,
    name: "#Ticket - 039",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 11,
    name: "#Ticket - 040",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Predial",
  },
  {
    id: 12,
    name: "#Ticket - 041",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 13,
    name: "#Ticket - 042",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 14,
    name: "#Ticket - 043",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 15,
    name: "#Ticket - 044",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 16,
    name: "#Ticket - 045",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
  {
    id: 17,
    name: "#Ticket - 046",
    block: "#Bloco:C1 - IMC",
    locale: "#Local:LDC2",
    type: "Manutenção em TI",
  },
];
