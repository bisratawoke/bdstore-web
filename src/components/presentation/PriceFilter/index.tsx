import React from "react";
import PriceRangeChart from "../../containers/PriceRangeChart";

export default function index({
  setMinimumPrice,
  setMaximumPrice,
  maxPrice,
  minPrice,
}: {
  setMinimumPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setMaximumPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxPrice: any;
  minPrice: any;
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

      <PriceRangeChart minPrice={minPrice} maxPrice={maxPrice} />
    </div>
  );
}
