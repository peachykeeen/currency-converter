import { CurrencyWithRate } from "../../types/CurrencyWithRate";
import CurrencyExchangeRateRow from "./components/CurrencyExchangeRateRow";
import CurrencyExchangeRatesHeader from "./components/CurrencyExchangeRatesHeader";
import { StyledTableWrapper, StyledTable } from "./styles";

export default function CurrencyExchangeRates({
  currenciesWithRates,
}: {
  currenciesWithRates: CurrencyWithRate[];
}) {
  return (
    <StyledTableWrapper>
      <StyledTable>
        <CurrencyExchangeRatesHeader />
        <tbody>
          {currenciesWithRates.map((row: CurrencyWithRate, idx: number) => {
            return <CurrencyExchangeRateRow key={idx} currencyWithRate={row} />;
          })}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
}
