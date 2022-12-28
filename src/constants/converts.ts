export function convertNumberToString(value: number): string {
  return value.toFixed(2).replace(".", ",");
}

export function convertBooleanToString(value: boolean): string {
  if (value === true) return "habilitado";
  if (value === false) return "desabilitado";
  return "";
}

export function convertTimestampToDateString(value: Date): string {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(value));
}

export function convertBooleanToStringYesOrNot(value: boolean): string {
  if (value === true) return "sim";
  if (value === false) return "não";
  return "";
}
