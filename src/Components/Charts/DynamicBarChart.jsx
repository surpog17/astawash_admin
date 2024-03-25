import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

// Now registering LinearScale along with other necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const data = {
  labels: ["Sep 1", "Sep 7", "Sep 14", "Sep 23", "Sep 30"],
  datasets: [
    {
      label: "# of Votes",
      data: [20, 5, 3, 2, 17],
      backgroundColor: ["#2a3ac7", "#2a3ac7", "#2a3ac7", "#2a3ac7", "#2a3ac7"],
      borderWidth: 1,
      borderRadius: 20,
    },
  ],
};

const options = {
  scales: {
    x: {
      grid: {
        display: false, // This will remove the vertical grid lines
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        // Callback function to format the Y-axis labels
        callback: function (value, index, values) {
          // This appends 'votes' to each label on the Y-axis
          return "$" + `${value} K`;
        },
      },
      grid: {
        display: false, // This will remove the vertical grid lines
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
const DynamicBarChart = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800 font-archivo">
            Total earning
          </h1>
          <div>
            <select
              className="font-archivo block w-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="chartType"
              id="chartType"
            >
              {/* Adjust the options if you're keeping the selector */}
              <option value="bar">Bar</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <div className="h-72 flex justify-center">
            <Bar data={data} options={options} />
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600 font-archivo">
          88% more earnings than last month, keep watching to find out your
          earnings
        </p>
      </div>
    </div>
  );
};

export default DynamicBarChart;
