import { CiCircleRemove } from "react-icons/ci";
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
      className={`border-r-2 border-gray-300 p-2 px-4 text-${text_size} flex flex-cols`}
    >
      <div
        className={`${
          name.includes("Anywhere") || name.includes("Everything")
            ? ""
            : "border-2 border-gray-200 rounded-xl flex flex-cols "
        } `}
      >
        <span
          className={`${
            name.includes("Anywhere") || name.includes("Everything")
              ? "text-gray-400"
              : ""
          } `}
        >
          {name}
        </span>
        {name.includes("Anywhere") || name.includes("Everything") ? (
          <></>
        ) : (
          <CiCircleRemove
            className="hover:cursor-pointer text-black"
            onClick={() => removeFilter(filterType)}
          />
        )}
      </div>
    </div>
  );
}
