import React, { useEffect, useState } from "react";
import { Region } from "../../../domain/models";
import RegionPresentor from "../../presentation/Region";
import LocationRepo from "../../../repository/locationRepo";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
export default function index({}: {}) {
  const locationRepo = new LocationRepo();
  const navigate = useNavigate();
  const [regions, setRegions] = useState<any>();
  const storeChosenFilterValue = (value: string) => {
    localStorage.setItem("location", value);
    navigate("product");
  };

  const onSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    locationRepo
      .getRegions(e.target.value.toLowerCase())
      .then((regions) => setRegions(regions));
  };

  useEffect(() => {
    locationRepo.getRegions().then((regions) => setRegions(regions));
  }, []);
  return (
    <div className="grid grid-cols-1 ">
      <div className="flex flex-col bg-white gap-5 p-5 rounded-xl">
        <div className="grid grid-cols-1 py-2 ">
          <IoArrowBackCircleOutline
            className="text-3xl text-gray-500"
            onClick={() => navigate("/")}
          />
        </div>
        <span className="text-2xl font-medium text-gray-800 text-black-500">
          Pick location
        </span>
        <input
          placeholder="Search location"
          className="rounded-xl p-4 border-2 border-gray-300"
          onChange={onSearchInputChanged}
        />

        <div className="grid grid-cols-2 gap-10 scrollbar-hide overflow-x-scroll">
          {regions?.map((region: Region) => (
            <RegionPresentor
              key={region.name}
              region={region}
              storeChosenFilterValue={storeChosenFilterValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
