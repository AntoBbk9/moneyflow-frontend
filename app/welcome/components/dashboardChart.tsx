import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Income",
      data: [400, 300, 500, 700],
      borderColor: "#22c55e",
      backgroundColor: "rgba(34, 197, 94, 0.2)",
      tension: 0.4,
    },
    {
      label: "Expenses",
      data: [240, 139, 380, 430],
      borderColor: "#ef4444",
      backgroundColor: "rgba(239, 68, 68, 0.2)",
      tension: 0.4,
    },
  ],
};

export default function DashboardChart() {
  return <Line data={data} />;
}
