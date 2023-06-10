import React from "react";
import { Region } from "../../../domain/models";

export default function index({
  region,
  storeChosenFilterValue,
}: {
  region: Region;
  storeChosenFilterValue: (value: string) => void;
}) {
  return (
    <div
      className="flex flex-col items-center"
      onClick={(e) => storeChosenFilterValue(region.name)}
    >
      <img
        src={`${region.picture_url}`}
        className="flex-shrink-0 object-contain h-32 flex-basis-32"
      />
      <span className="text-gray-500">{region.name}</span>
    </div>
  );
}
