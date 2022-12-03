import { optionsStatus } from "../../constants/listSelects";
import { Select } from "../Select";

export const _renderBasicTextCell = (value: string) => (
  <span>{value || "--"}</span>
);

export const _renderBasicSelectCell = (value: string) => (
  <Select array={optionsStatus} />
);
