import { IDailySeriesResponse } from "../types/dailySeries";
import { client } from "./client.ts";

const getDailySeries = async (
  symbol = "IBM",
): Promise<IDailySeriesResponse> => {
  const { data } = await client.get("query", {
    params: {
      function: "TIME_SERIES_DAILY",
      symbol,
    },
  });
  return data;
};


export default {
  getDailySeries,
};
