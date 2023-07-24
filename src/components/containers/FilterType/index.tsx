import React, { useEffect, useState } from "react";
import LocationRepo from "../../../repository/locationRepo";
import SearchLocation from "../../presentation/SearchLocation";
import ProductFilter from "../ProductFilter";
import PriceFilter from "../../presentation/PriceFilter";
import ProductRepo from "../../../repository/productRepo";
export enum filterTypes {
  LOCATION,
  PRODUCT_TYPE,
  PRICE_RANGE,
}
export default function index() {
  const [filterType, setFilterType] = useState<filterTypes>(
    filterTypes.LOCATION
  );
  const locationRepo = new LocationRepo();
  const productRepo = new ProductRepo();
  const [regions, setRegions] = useState<any>();
  const [maxPrice, setMaxPrice] = useState<any>();
  const [minPrice, setMinPrice] = useState<any>();
  const storeChosenFilterValue = (value: string) => {
    localStorage.setItem("location", value);
    setFilterType(filterTypes.PRODUCT_TYPE);
  };

  const onSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    locationRepo
      .getRegions(e.target.value.toLowerCase())
      .then((regions) => setRegions(regions));
  };

  const setMinimumPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    productRepo.setMinimumPrice(e.target.value);
    setMinPrice(e.target.value);
  };
  const setMaximumPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    productRepo.setMaximumPrice(e.target.value);
    setMaxPrice(e.target.value);
  };
  useEffect(() => {
    console.log(filterTypes);

    locationRepo.getRegions().then((regions) => setRegions(regions));
  }, []);

  switch (filterType) {
    case filterTypes.PRICE_RANGE:
      return (
        <PriceFilter
          setMinimumPrice={setMinimumPrice}
          setMaximumPrice={setMaximumPrice}
          maxPrice={maxPrice}
          minPrice={minPrice}
        />
      );
      break;
    case filterTypes.PRODUCT_TYPE:
      return <ProductFilter setFilterType={setFilterType} />;
      break;
    default:
      return (
        <SearchLocation
          regions={regions}
          onSearchInputChanged={onSearchInputChanged}
          storeChosenFilterValue={storeChosenFilterValue}
        />
      );
  }
}
