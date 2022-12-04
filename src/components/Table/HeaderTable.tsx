import { useState } from "react";
import { ContainerInput, StyledInput, StyledSelect } from "./styles";
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
  const [searchSelectState, setSearchSelectState] = useState("");

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

      {renderInputSearchAndSelect && (
        <ContainerInput alignEnd>
          <StyledSelect
            options={renderInputSearchAndSelect.map((item) => item.placeholder)}
            labelColum="Selecione coluna de busca"
            required
            isStateControlled
            onChangeStateControled={(e) => {
              setSearchSelectState(e.target.value);
            }}
            placeholder="Selecione coluna"
          />
          <StyledInput
            isSearch
            isRow
            width="50%"
            placeholder={`Pesquisar ${searchSelectState}`}
            handleSearch={(value) => {
              const objInputSearch = renderInputSearchAndSelect.filter(
                (item) => item.placeholder === searchSelectState
              );

              handleSearch(value, objInputSearch[0].searchPropertName);
            }}
            disabled={!searchSelectState.length}
          />
        </ContainerInput>
      )}

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
