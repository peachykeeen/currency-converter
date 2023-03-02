import { Currency } from "../../../types/Currency";
import { StyledTr, StyledTd } from "../styles";

type Props = {
  currency: Currency;
};

export default function CurrencyRow({ currency }: Props) {
  return (
    <StyledTr>
      <StyledTd>{currency.name}</StyledTd>
      <StyledTd>{currency.code}</StyledTd>
      <StyledTd>{currency.country}</StyledTd>
      <StyledTd>
        {parseFloat(
          (currency.czkExchangeRate / currency.size).toFixed(6)
        ).toString()}
      </StyledTd>
    </StyledTr>
  );
}
