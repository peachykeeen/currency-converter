import { CurrencyWithRate } from '../types/CurrencyWithRate';

export async function fetchExchangeRates(): Promise<CurrencyWithRate[]> {
  const res = await fetch(
    "/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
  );
  let data = await res.text();
  let dataArr = data
    .split("\n")
    .map((row) => row.split("|"))
    .slice(2, data.split("\n").length - 1);

  return dataArr.map(row => {
    return {
      country: row[0],
      currency: row[1],
      size: parseInt(row[2]),
      abbreviation: row[3],
      exchangeRate: parseFloat(row[4]),
    }
  })
}
