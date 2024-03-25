import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [19, 9, 3],
      backgroundColor: ["#2a3ac7", "#fed335", "#f5f5f5"],
      borderWidth: 1,
    },
  ],
};
const options = {
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "right",
    },
  },
};
const DynamicPieChart = () => {
  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800 font-archivo">
            Total earning
          </h1>
          <div className="">
            <select
              className="font-archivo block w-full px-4 py-2 bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="chartType"
              id="chartType"
            >
              <option value="doughnut">Doughnut</option>
              <option value="pie">Pie</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <div className="h-72 flex justify-center">
            <Doughnut data={data} height={500} options={options} />
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600  font-archivo">
          88% more earnings than last month, keep watching to find out your
          earnings
        </p>
      </div>
    </div>
  );
};

export default DynamicPieChart;
