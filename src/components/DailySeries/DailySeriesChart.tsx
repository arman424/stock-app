import { IDailySeries } from "@/types/dailySeries";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { Line } from "react-chartjs-2";

interface Props {
  dailySeries: IDailySeries[];
}
export default function DailySeriesChart({ dailySeries }: Props) {
  if (!dailySeries?.length) return null;

  const dates = dailySeries.map((item) => item.date);
  const openPrices = dailySeries.map((item) => item.open);
  const highPrices = dailySeries.map((item) => item.high);
  const lowPrices = dailySeries.map((item) => item.low);
  const closePrices = dailySeries.map((item) => item.close);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: "Open Price",
        data: openPrices,
        borderColor: "rgb(75, 192, 192)",
        pointBackgroundColor: "#ccc",
        tension: 0.1,
      },
      {
        label: "High Price",
        data: highPrices,
        borderColor: "rgb(192, 75, 75)",
        pointBackgroundColor: "#ccc",
        fill: "rgb(192, 75, 75)",
        tension: 0.1,
      },
      {
        label: "Low Price",
        data: lowPrices,
        borderColor: "rgb(75, 75, 192)",
        pointBackgroundColor: "#ccc",
        tension: 0.1,
      },
      {
        label: "Close Price",
        data: closePrices,
        borderColor: "rgb(75, 192, 75)",
        pointBackgroundColor: "#ccc",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          color: "grey",
        },
        ticks: {
          color: "#adadad",
        },
      },
      y: {
        grid: {
          color: "grey",
        },
        ticks: {
          color: "#adadad",
        },
      },
    },

    color: "#ccc",
  };

  return (
    <div className="w-full">
      <Line data={chartData} options={options} />
    </div>
  );
}
