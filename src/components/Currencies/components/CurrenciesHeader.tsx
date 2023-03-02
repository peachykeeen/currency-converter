import { StyledTr, StyledTh } from "../styles";

export default function CurrencyHeader() {
  return (
    <thead>
      <StyledTr>
        <StyledTh>Currency</StyledTh>
        <StyledTh>Code</StyledTh>
        <StyledTh>Country</StyledTh>
        <StyledTh>CZK rate</StyledTh>
      </StyledTr>
    </thead>
  )
}