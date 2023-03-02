import { Currency } from "../../types/Currency";
import { ExchangeRateForm } from "../../types/ExchangeRateForm";
import {
  StyledAmountSection,
  StyledContainer,
  StyledResultSection,
} from "./styles";

type Props = {
  exchangeRateForm: ExchangeRateForm;
  currencies: Currency[];
};

export default function CurrencyExchangeResult({
  exchangeRateForm,
  currencies,
}: Props) {
  const selectedCurrency = currencies.find(
    (currency) => currency.code === exchangeRateForm.currencyCode
  );
  const roundedExchangeResult = selectedCurrency
    ? Math.round(
        (parseFloat(exchangeRateForm.czkAmount) /
          (selectedCurrency.czkExchangeRate / selectedCurrency.size) +
          Number.EPSILON) *
          100
      ) / 100
    : "";

  return (
    <StyledContainer>
      <StyledAmountSection>
        {exchangeRateForm.czkAmount} Czech Koruna equals
      </StyledAmountSection>
      {selectedCurrency && (
        <StyledResultSection>
          {`${roundedExchangeResult} ${selectedCurrency.country} ${selectedCurrency.name}`}
        </StyledResultSection>
      )}
    </StyledContainer>
  );
}
