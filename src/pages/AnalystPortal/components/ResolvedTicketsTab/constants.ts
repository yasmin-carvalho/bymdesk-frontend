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
  //REQUESTER: "",
  STATUS: "status",
};

export const columnConfig: ITypeColumnConfig = {
  [columnType.NAME]: { order: 1 },
  [columnType.BLOCK]: { order: 2 },
  [columnType.LOCALE]: { order: 3 },
  //[columnType.REQUESTER]: { order: 4 },
  [columnType.STATUS]: { order: 4 },
};

export const columnLabel: ITypeColumnLabel = {
  [columnType.NAME]: "Ticket",
  [columnType.BLOCK]: "Bloco",
  [columnType.LOCALE]: "Local",
  //[columnType.REQUESTER]: "Solicitante",
  [columnType.STATUS]: "Status",
};

export const arrayRenderInputSearch: IRenderInputSearch[] = [
  { searchPropertName: columnType.NAME, placeholder: "ticket", type: "string" },
  { searchPropertName: columnType.BLOCK, placeholder: "bloco", type: "string" },
  {
    searchPropertName: columnType.LOCALE,
    placeholder: "local",
    type: "string",
  },
  // {
  //   searchPropertName: columnType.REQUESTER,
  //   placeholder: "solicitante",
  //   type: "string",
  // },
  {
    searchPropertName: columnType.STATUS,
    placeholder: "status",
    type: "string",
  },
];
