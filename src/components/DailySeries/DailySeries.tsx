import useDailySeries from "@/hooks/useDailySeries";
import DailySeriesChart from "./DailySeriesChart";

export default function DailySeries() {
  const { series } = useDailySeries();

  return (
    <div>
      <h1 className="text-white text-2xl text-center font-semibold">
        DAILY | IBM
      </h1>

      <div className="mt-8">
        {series.length === 0 && <p className="text-slate-300 text-center">No data available.</p>}

        <DailySeriesChart dailySeries={series} />
      </div>
    </div>
  );
}
