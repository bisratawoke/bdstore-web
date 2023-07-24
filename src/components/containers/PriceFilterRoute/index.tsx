import React, { useState } from "react";
import PriceRangeChart from "../../containers/PriceRangeChart";
import ProductRepo from "../../../repository/productRepo";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function index({}: {}) {
  const navigate = useNavigate();
  const productRepo = new ProductRepo();
  const [maxPrice, setMaxPrice] = useState<any>();
  const [minPrice, setMinPrice] = useState<any>();
  const setMinimumPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    productRepo.setMinimumPrice(e.target.value);
    setMinPrice(e.target.value);
  };
  const setMaximumPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    productRepo.setMaximumPrice(e.target.value);
    setMaxPrice(e.target.value);
  };
  return (
    <div className="flex flex-col bg-white gap-5 p-5 rounded-xl py-10">
      <div className="grid grid-cols-1">
        <IoArrowBackCircleOutline
          className="text-3xl text-gray-500"
          onClick={() => navigate("/filter/product")}
        />
      </div>
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
