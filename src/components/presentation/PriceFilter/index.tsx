import React from "react";
import { CategoryScale, Chart, LinearScale, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);
export default function index({
  setMinimumPrice,
  setMaximumPrice,
}: {
  setMinimumPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setMaximumPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col bg-white gap-5 p-5 rounded-xl py-10">
      <span className="text-2xl font-medium text-gray-800 text-black-500">
        Set Price Range
      </span>

      <div className="grid grid-cols-2 gap-2 my-5">
        <div className="flex flex-col gap-2">
          <label>From</label>
          <input
            placeholder="Search Product Type"
            className="rounded-xl p-4 border-2 border-gray-300"
            onChange={setMinimumPrice}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Up To</label>
          <input
            placeholder="Search Product Type"
            className="rounded-xl p-4 border-2 border-gray-300"
            onChange={setMaximumPrice}
          />
        </div>
      </div>
      <div className="flex">
        <Bar
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81, 56, 55, 40],
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
