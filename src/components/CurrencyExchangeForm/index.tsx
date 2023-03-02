import React from "react";
import { useForm } from "react-hook-form";
import { Currency } from "../../types/Currency";
import { ExchangeRateForm } from "../../types/ExchangeRateForm";
import { StyledButtonContainer, StyledForm, StyledButton } from "./styles";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../Select";
import Input from "../Input";

type Props = {
  currencies: Currency[];
  setExchangeRateForm: React.Dispatch<
    React.SetStateAction<ExchangeRateForm | null>
  >;
};

export default function CurrencyExchangeForm({
  currencies,
  setExchangeRateForm,
}: Props) {
  const onSubmit = (submittedFormData: ExchangeRateForm) => {
    setExchangeRateForm(submittedFormData);
  };

  const validationSchema = Yup.object().shape({
    czkAmount: Yup.number()
      .required("This field is required")
      .typeError("")
      .positive("Please enter amount > 0"),
    currency: Yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExchangeRateForm>({ resolver: yupResolver(validationSchema) });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <Input
          label={"Amount in CZK"}
          name="czkAmount"
          register={register}
          required={true}
          type={"number"}
        />
        {errors.czkAmount?.message}
      </div>

      <div>
        <Select
          register={register}
          options={currencies.map((currency) => currency.code)}
          name={"currencyCode"}
          label={"To"}
        />
      </div>

      <StyledButtonContainer>
        <StyledButton type="submit">Calculate</StyledButton>
      </StyledButtonContainer>
    </StyledForm>
  );
}
