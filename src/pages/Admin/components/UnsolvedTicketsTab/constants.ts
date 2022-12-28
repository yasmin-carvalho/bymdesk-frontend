import {
  IRenderInputSearch,
  ITypeColumnConfig,
  ITypeColumnLabel,
} from "../../../../components/Table/types";

// Table Row --------------------------
export const columnType = {
  NAME: "id",
  BLOCK: "nome_bloco",
  LOCALE: "nome_local",
  TYPE: "tipo",
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
