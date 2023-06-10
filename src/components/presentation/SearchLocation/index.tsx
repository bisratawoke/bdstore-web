import React from "react";
import { Region } from "../../../domain/models";
import RegionPresentor from "../Region";
export default function index({
  regions,
  onSearchInputChanged,
  storeChosenFilterValue,
}: {
  regions: Region[];
  onSearchInputChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  storeChosenFilterValue: (value: string) => void;
}) {
  return (
    <div className="flex flex-col bg-white gap-5 p-5 rounded-xl">
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
            region={region}
            storeChosenFilterValue={storeChosenFilterValue}
          />
        ))}
      </div>
    </div>
  );
}
