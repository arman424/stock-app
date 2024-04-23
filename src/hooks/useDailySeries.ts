import api from "@/api/api";
import { IDailySeries } from "@/types/dailySeries";
import { mapDailySeries } from "@/utils/mapDailySeries";
import { useEffect, useState } from "react";
import useApiErrorHandler from "./useApiErrorHandler";

export default () => {
  // In the future this can be stored in the context or a global state
  const [series, setSeries] = useState<IDailySeries[]>([]);
  const apiErrorHandler = useApiErrorHandler();

  const initSeriesAction = () => {
    apiErrorHandler(async () => {
      api.getDailySeries().then(data => {
        setSeries(mapDailySeries(data));
      });
    });
  }

  const resetSeries = () => {
    setSeries([]);
  };

  useEffect(() => {
    initSeriesAction();
  }, []);

  return {
    series,
    resetSeries,
  };
};
