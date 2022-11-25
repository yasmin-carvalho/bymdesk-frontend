import { Input } from "../Input";
import { Select } from "../Select";
import { ContainerInput, StyledInput } from "./styles";
import { IRenderInputSearch } from "./types";

interface HeaderTableProps {
  renderInputSearch?: IRenderInputSearch;
  renderInputSearchAndSelect?: IRenderInputSearch[];
  arrayRenderInputSearch?: IRenderInputSearch[];
  handleSearch: (value: string, searchPropertName: string) => void;
}

export function HeaderTable({
  arrayRenderInputSearch,
  renderInputSearch,
  renderInputSearchAndSelect,
  handleSearch,
}: HeaderTableProps) {
  return (
    <>
      {renderInputSearch && (
        <StyledInput
          isSearch
          isRow
          placeholder={`Pesquisar ${renderInputSearch.placeholder}`}
          handleSearch={(value) =>
            handleSearch(value, renderInputSearch.searchPropertName)
          }
        />
      )}

      {/* {renderInputSearchAndSelect && (
        <ContainerInput>
          <Select
            array={renderInputSearchAndSelect.map((item) => item.placeholder)}
            label="Selecione coluna de busca"
          />
          <Input
            isSearch
            isRow
            placeholder={`Pesquisar ${item.placeholder}`}
            handleSearch={(value) =>
              handleSearch(value, item.searchPropertName)
            }
          />
        </ContainerInput>
      )} */}

      {arrayRenderInputSearch && (
        <ContainerInput>
          {arrayRenderInputSearch.map((item) => (
            <StyledInput
              isSearch
              isRow
              placeholder={`Pesquisar ${item.placeholder}`}
              handleSearch={(value) =>
                handleSearch(value, item.searchPropertName)
              }
              key={item.placeholder}
            />
          ))}
        </ContainerInput>
      )}
    </>
  );
}
