import { Currency } from "../../types/Currency";
import CurrenciesRow from "./components/CurrenciesRow";
import CurrenciesHeader from "./components/CurrenciesHeader";
import { StyledTableWrapper, StyledTable } from "./styles";

type Props = {
  currencies: Currency[];
};

export default function Currencies({ currencies }: Props) {
  return (
    <StyledTableWrapper>
      <StyledTable>
        <CurrenciesHeader />
        <tbody>
          {currencies.map((row: Currency, idx: number) => {
            return <CurrenciesRow key={idx} currency={row} />;
          })}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
}
