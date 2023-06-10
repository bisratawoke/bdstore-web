import { IoArrowBackCircleOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import FilterType from "../../containers/FilterType";

export default function index({
  applyFilteration,
  hideModal,
}: {
  applyFilteration: () => void;
  hideModal: () => void;
}) {
  return (
    <div className="h-screen h-screen bg-white p-2 bg-gray-300 flex flex-col gap-1 scrollbar-hide overflow-y-scroll ">
      <div className="grid grid-cols-1 py-7 px-5">
        <IoArrowBackCircleOutline
          className="text-3xl text-gray-500"
          onClick={() => hideModal()}
        />
      </div>
      <FilterType />
      <div className="flex justify-between py-7 px-7 bg-white rounded-xl items-center my-10">
        <span className="underline font-medium text-lg">Clear_all</span>
        <div
          className="py-2 px-5 bg-rose-600 flex flex-cols gap-2 items-center rounded-lg"
          onClick={applyFilteration}
        >
          <AiOutlineSearch className="text-lg text-white" />
          <span className="text-white text-lg">Search</span>
        </div>
      </div>
    </div>
  );
}
