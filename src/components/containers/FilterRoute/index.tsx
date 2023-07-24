import { AiOutlineSearch } from "react-icons/ai";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentFilter } from "../Filters/filterSlice";
import { useNavigate } from "react-router-dom";
export default function index() {
  //  const filters = useSelector((state: any) => state.filter);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const applyFilteration = () => {
    const filters: any = {
      location: localStorage.getItem("location"),
      category: localStorage.getItem("category"),
      min_price: localStorage.getItem("min_price"),
      max_price: localStorage.getItem("max_price"),
    };
    dispatch(setCurrentFilter(filters));
    navigate("/");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="h-screen h-screen  lg:border-2 lg:col-start-4 lg:col-end-10 lg:border-gray-200 bg-white p-2 bg-gray-300 flex flex-col gap-1 scrollbar-hide overflow-y-scroll ">
        <Outlet />
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
    </div>
  );
}
