import React from "react";
import { StyledLabel } from "../CurrencyExchangeForm/styles";
import { StyledInput } from "./styles";

type Props = {
  label: string;
  name: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  register: any; // todo
};

export default function Input({
  label,
  name,
  register,
  required = false,
  type = "text",
}: Props) {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={type} required={required} {...register(name)} />
    </>
  );
}
