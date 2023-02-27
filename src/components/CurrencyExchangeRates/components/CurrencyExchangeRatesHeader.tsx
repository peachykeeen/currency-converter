import { StyledTr, StyledTh } from "../styles";

export default function CurrencyExchangeRatesHeader() {
  return (
    <thead>
      <StyledTr>
        <StyledTh>Currency</StyledTh>
        <StyledTh>Code</StyledTh>
        <StyledTh>Country</StyledTh>
        <StyledTh>Amount</StyledTh>
        <StyledTh>CZK rate</StyledTh>
      </StyledTr>
    </thead>
  )
}