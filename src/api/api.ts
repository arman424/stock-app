import { IDailySeriesResponse } from "../types/dailySeries";
import { client } from "./client.ts";
import { generateRandomRecords } from "./mock";

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
  // return generateRandomRecords(); // allowed only 25 api calls daily
};


export default {
  getDailySeries,
};
