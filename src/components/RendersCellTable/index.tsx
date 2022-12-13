import { optionsStatus } from "../../constants/listSelects";
import { Select } from "../Select";

export const _renderBasicTextCell = (value: string) => (
  <span>{value || "--"}</span>
);

export const _renderBasicSelectCell = (value: string, data: any) => (
  <Select
    options={optionsStatus}
    onChangeStateControled={(e) => {
      e.stopPropagation();
      console.log("valor", e.target.value);
      console.log("data", data);
    }}
    value={value}
    onClick={(e) => e.stopPropagation()}
  />
);
