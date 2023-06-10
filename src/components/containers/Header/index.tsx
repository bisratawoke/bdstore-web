import Logo from "../../presentation/Logo";
import Search from "../../presentation/Search";
import SearchFilter from "../../presentation/SearchFilter";
import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentFilter } from "../Filters/filterSlice";
import LocalStorage from "../../../database/localStorage";
export default function index() {
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const localStorage = new LocalStorage();
  const filters = useSelector((state: any) => state.filter);
  const dispatch = useDispatch();
  const showModal = useCallback(async () => {
    setShowFilterModal(true);
  }, []);

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
    const filters = {
      location:
        filter == "location" ? "Anywhere" : localStorage.getItem("location"),
      category:
        filter == "category" ? "Everything" : localStorage.getItem("category"),
      min_price: localStorage.getItem("min_price"),
      max_price: localStorage.getItem("max_price"),
    };
    dispatch(setCurrentFilter(filters));
  };
  return (
    <div>
      {showFilterModal == true ? (
        <SearchFilter applyFilteration={applyFilteration} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12  bg-white px-10">
          <Logo />
          <Search
            showModal={showModal}
            region={filters.current.location}
            productType={filters.current.category}
            removeFilter={removeFilter}
          />
        </div>
      )}
    </div>
  );
}
