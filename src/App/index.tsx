import CurrencyExchangeRates from '../components/CurrencyExchangeRates';
import { useQuery } from 'react-query';

import { fetchExchangeRates } from '../api/index';

import {
  StyledLoader,
  StyledError,
  StyledContainer,
} from "./styles";

function App() {
  const { isLoading, error, data: currenciesWithRates } = useQuery("czkExchangeRates", fetchExchangeRates);

  if (isLoading) {
    return <StyledLoader>Loading...</StyledLoader>;
  } else if (error || !currenciesWithRates) {
    return (
      <StyledError>There was an error loading the application</StyledError>
    );
  } else {
    return (
      <StyledContainer>
        <h3>Currency converter</h3>
        <CurrencyExchangeRates currenciesWithRates={currenciesWithRates} />
      </StyledContainer>
    );
  }
}

export default App;
