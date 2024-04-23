import { IDailySeriesResponse } from "@/types/dailySeries";

export const generateRandomRecords = (amount = 50): IDailySeriesResponse => {
  const response: IDailySeriesResponse = {
    "Meta Data": {
      "1. Information": "Daily Time Series with Splits and Dividend Events",
      "2. Symbol": "IBM",
      "3. Last Refreshed": "2021-10-08",
      "4. Output Size": "Compact",
      "5. Time Zone": "US/Eastern",
    },
    "Time Series (Daily)": {},
  };

  for (let i = 0; i < amount; i++) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - i);

    const dateString = currentDate.toISOString().split("T")[0];
    response["Time Series (Daily)"][dateString] = {
      "1. open": (Math.random() * 100 + 100).toFixed(4),
      "2. high": (Math.random() * 100 + 100).toFixed(4),
      "3. low": (Math.random() * 100 + 100).toFixed(4),
      "4. close": (Math.random() * 100 + 100).toFixed(4),
      "5. volume": (Math.random() * 1000000).toFixed(0),
    };

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return response;
};
