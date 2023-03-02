import { Currency } from "../types/Currency";
import { get } from "../api/httpClient";

export async function fetchExchangeRates(): Promise<Currency[]> {
  const res = await get(
    "/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
  );

  return mapResToCurrencies(res);
}

// todo move this somewhere else
function mapResToCurrencies(data: string): Currency[] {
  let dataArr = data
    .split("\n")
    .map((row) => row.split("|"))
    .slice(2, data.split("\n").length - 1);

  return dataArr.map((row) => {
    return {
      country: row[0],
      name: row[1],
      size: parseInt(row[2]),
      code: row[3],
      czkExchangeRate: parseFloat(row[4]),
    };
  });
}
