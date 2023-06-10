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
  removeFilter: (filter: string) => void;
}) {
  return (
    <>
      <div className="rounded-3xl border-2 border-gray-200 shadow-md flex items-center gap-3 p-2 lg:col-start-6 lg:col-end-9 lg:my-5   ">
        <AiOutlineSearch className="text-lg" onClick={() => showModal()} />
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
