import { CurrencyWithRate } from "../../../types/CurrencyWithRate";
import { StyledTr, StyledTd } from "../styles";

export default function CurrencyExchangeRateRow({
  currencyWithRate,
}: {
  currencyWithRate: CurrencyWithRate;
}) {
  return (
    <StyledTr>
      <StyledTd>{currencyWithRate.currency}</StyledTd>
      <StyledTd>{currencyWithRate.abbreviation}</StyledTd>
      <StyledTd>{currencyWithRate.country}</StyledTd>
      <StyledTd>{currencyWithRate.size.toString()}</StyledTd>
      <StyledTd>{currencyWithRate.exchangeRate.toString()}</StyledTd>
    </StyledTr>
  );
}
