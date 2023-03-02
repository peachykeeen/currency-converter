import Currencies from "../components/Currencies";
import { useQuery } from "react-query";
import { useState } from "react";
import { ExchangeRateForm } from "../types/ExchangeRateForm";
import { fetchExchangeRates } from "../services/cnbApiService";
import { StyledLoader, StyledError, StyledContainer } from "./styles";
import CurrencyExchangeForm from "../components/CurrencyExchangeForm";
import CurrencyExchangeResult from "../components/CurrencyExchangeResult";

function App() {
  const {
    isLoading,
    error,
    data: currencies,
  } = useQuery("currencies", fetchExchangeRates);
  let [exchangeRateForm, setExchangeRateForm] =
    useState<ExchangeRateForm | null>(null);

  if (isLoading) {
    return <StyledLoader>Loading...</StyledLoader>;
  } else if (error || !currencies) {
    return (
      <StyledError>There was an error loading the application</StyledError>
    );
  } else {
    return (
      <StyledContainer>
        <h3>Currency converter</h3>

        <CurrencyExchangeForm
          currencies={currencies}
          setExchangeRateForm={setExchangeRateForm}
        />

        {exchangeRateForm && (
          <CurrencyExchangeResult
            exchangeRateForm={exchangeRateForm}
            currencies={currencies}
          />
        )}

        <Currencies currencies={currencies} />
      </StyledContainer>
    );
  }
}

export default App;
