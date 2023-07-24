import { AiOutlineSearch } from "react-icons/ai";
import Filter from "../Filter/";
export default function index({
  showModal,
  region,
  productType,
  removeFilter,
}: {
  showModal: () => void;
  region: string;
  productType: string;
  minPrice: string | null;
  maxPrice: string | null;
  removeFilter: (filter: string) => void;
}) {
  return (
    <>
      <div className="rounded-3xl border-2 border-gray-200 shadow-md flex items-center  gap-3 px-3 lg:p-1 lg:col-start-5 lg:col-end-8 my-5   ">
        <AiOutlineSearch
          className="text-lg hover:cursor-pointer"
          onClick={() => showModal()}
        />
        <div className="flex gap-2 ">
          <Filter
            name={region}
            text_size="md"
            removeFilter={removeFilter}
            filterType="location"
          />
          <Filter
            name={productType}
            text_size="md"
            removeFilter={removeFilter}
            filterType="category"
          />

          {/* <span className="text-md font-medium">{region}</span>
          <span className="text-sm font-normal text-gray-400">
            {productType}
          </span> */}
        </div>
      </div>
    </>
  );
}
