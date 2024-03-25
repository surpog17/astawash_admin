import React from "react";
import DynamicPieChart from "../../Components/Charts/DynamicPieChart";
import DynamicBarChart from "../../Components/Charts/DynamicBarChart";
import Header from "./Header";
import Cars from "./Cars";
import Report from "./Report";

export default function index() {
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-8 col-span-12">
          <DynamicBarChart />
        </div>
        <div className="md:col-span-4 col-span-12">
          <DynamicPieChart />
        </div>
      </div>
      <Cars />
      <Report />
    </div>
  );
}
