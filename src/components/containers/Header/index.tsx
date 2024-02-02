import Search from "../../presentation/Search";
import SearchFilter from "../../presentation/SearchFilter";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentFilter,
  setCurrentLocationFilter,
  setCurrentProductCategory,
} from "../Filters/filterSlice";
import LocalStorage from "../../../database/localStorage";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import UserProfile from "../UserProfile";
export default function index() {
  const navigate = useNavigate();
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const localStorage = new LocalStorage();
  const filters = useSelector((state: any) => state.filter);
  const dispatch = useDispatch();

  const hideModal = () => {
    setShowFilterModal(false);
  };
  const applyFilteration = () => {
    const filters: any = {
      location: localStorage.getItem("location"),
      category: localStorage.getItem("category"),
      min_price: localStorage.getItem("min_price"),
      max_price: localStorage.getItem("max_price"),
    };
    dispatch(setCurrentFilter(filters));
    hideModal();
  };

  const removeFilter = (filter: string) => {
    if (filter == "location") {
      let fil: any = "Anywhere";
      dispatch(setCurrentLocationFilter(fil));
    } else {
      dispatch(setCurrentProductCategory("Everything"));
    }
  };
  return (
    <div>
      {showFilterModal == true ? (
        <SearchFilter
          applyFilteration={applyFilteration}
          hideModal={hideModal}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 px-5 bg-white border-b-2 border-gray-100">
            <div className="hidden lg:flex text-red-500  flex items-center flex-cols">
              <div className="">
                <img src={logo} className="h-fill" alt="logo" />
              </div>
              <span className="text-xl text-rose-500 font-bold flex-1 font-sans"></span>
            </div>
            <Search
              showModal={() => navigate("/filter")}
              region={filters.current.location}
              productType={filters.current.category}
              minPrice={filters.current.min_price}
              maxPrice={filters.current.max_price}
              removeFilter={removeFilter}
            />

            <div className="hidden lg:flex lg:col-start-11 col-end-13 flex items-center justify-between ">
              <span
                className="p-2 hover:bg-gray-200 border-1 border-white rounded-xl text-black hover:cursor-pointer font-sans "
                onClick={() => navigate("/sell")}
              >
                Sell you item
              </span>
              <UserProfile />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
