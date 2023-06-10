import React from "react";

export default function index({
  name,
  text_size,
  removeFilter,
  filterType,
}: {
  name: string;
  text_size: string;
  removeFilter: (filter: string) => void;
  filterType: string;
}) {
  return (
    <div
      className={`border-r-2 border-gray-300 p-2 px-4 text-${text_size}`}
      onClick={() => removeFilter(filterType)}
    >
      {name}
    </div>
  );
}
