/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { UseFormSetValue } from "react-hook-form/dist/types";
import {
  Asterisco,
  Container,
  ContainerLabel,
  StyledInput,
  Label,
  ContentInputFile,
  StyledSearchIcon,
  StyledInputMask,
  Img,
} from "./styles";

interface InputProps {
  control?: Control<any>;
  name?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;

  labelColum?: string;
  type?: React.HTMLInputTypeAttribute;
  isSearch?: boolean;
  isRow?: boolean;
  handleSearch?: (value: string) => void;
  disabled?: boolean;
  mask?: string;
  setValue?: UseFormSetValue<any>;
}

export function Input({
  control,
  name,
  label,
  required,
  placeholder,
  labelColum,
  type,
  isSearch,
  isRow,
  handleSearch,
  disabled,
  mask,
  setValue,
  ...rest
}: InputProps) {
  const [imgSrcState, setImgSrcState] = useState<string>();

  const onChangeInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setValue(name, file);
    setImgSrcState(file.name);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = (e) => {
      setImgSrcState(reader.result as string);
    };
  };

  const _renderInputControled = (
    value: any,
    onChange: (...event: any[]) => void
  ) => {
    if (mask) {
      return (
        <StyledInputMask
          mask={mask}
          maskChar="_"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
    } else {
      return (
        <StyledInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          isSearch={isSearch}
          type={type}
          onKeyUp={
            handleSearch ? (e: any) => handleSearch(e.target.value) : undefined
          }
          disabled={disabled}
        />
      );
    }
  };

  const _renderInput = () => {
    if (mask) {
      return (
        <StyledInputMask mask={mask} maskChar="_" placeholder={placeholder} />
      );
    } else {
      return (
        <StyledInput
          placeholder={placeholder}
          isSearch={isSearch}
          type={type}
          onKeyUp={
            handleSearch ? (e: any) => handleSearch(e.target.value) : undefined
          }
          disabled={disabled}
        />
      );
    }
  };

  return (
    <Container isRow={!!label || !!isRow} {...rest}>
      {label && (
        <ContainerLabel isRow={!!label || !!isRow}>
          <Label>{type !== "file" ? label : ""}</Label>
          {required && <Asterisco>*</Asterisco>}
        </ContainerLabel>
      )}

      {labelColum && (
        <ContainerLabel isRow={!!label || !!isRow}>
          <Label>{type !== "file" ? labelColum : ""}</Label>
          {required && <Asterisco>*</Asterisco>}
        </ContainerLabel>
      )}

      {isSearch && <StyledSearchIcon />}

      {type === "file" ? (
        <Controller
          name={name}
          control={control}
          render={({ fieldState: { error } }) => (
            <ContentInputFile>
              <div>
                <label htmlFor={name}>{label}</label>
                <input
                  type="file"
                  name={name}
                  id={name}
                  onChange={(e) => onChangeInputFile(e)}
                />
              </div>
              {!!imgSrcState && <Img src={imgSrcState} />}
            </ContentInputFile>
          )}
        />
      ) : control ? (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>{_renderInputControled(value, onChange)}</>
          )}
        />
      ) : (
        <>{_renderInput()}</>
      )}
    </Container>
  );
}
