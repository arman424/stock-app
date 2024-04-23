import { IDailySeries, IDailySeriesResponse } from "@/types/dailySeries";
import dayjs from "dayjs";

export const mapDailySeries = (data: IDailySeriesResponse): IDailySeries[] => {
  const records = data["Time Series (Daily)"];

  return Object.entries(records).map(([date, values]) => ({
    date: dayjs(date).format("MMM DD YY"),
    open: parseFloat(values["1. open"]),
    high: parseFloat(values["2. high"]),
    low: parseFloat(values["3. low"]),
    close: parseFloat(values["4. close"]),
  }));
};
