import { useEffect, useMemo, useState, useCallback } from "react";
import ProductRepo from "../../../repository/productRepo";
export default function index({
  minPrice,
  maxPrice,
}: {
  minPrice: string;
  maxPrice: string;
}) {
  const [numberOfMatches, setNumberOfMatches] = useState<number>(0);

  const filters = useMemo(() => {
    return {
      location: localStorage.getItem("location"),
      category: localStorage.getItem("category"),
    };
  }, []);
  const getProductsThatMatch = useCallback(async () => {
    try {
      console.log(minPrice, maxPrice);
      const productRepo = new ProductRepo();
      const result = await productRepo.getNumberOfProductsThatMatch({
        ...filters,
        min_price: minPrice === undefined || minPrice.length < 1 ? 0 : minPrice,
        max_price: maxPrice === undefined || maxPrice.length < 1 ? 0 : maxPrice,
      });
      setNumberOfMatches(result);
    } catch (error) {
      console.log(error);
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    getProductsThatMatch();
  }, [minPrice, maxPrice]);

  return (
    <div className=" grid grid-cols-1">
      <div className="flex justify-center">
        <div className="bg-green-500  rounded-full  flex flex-col items-center justify-center w-[150px] h-[150px]">
          <span className="text-white">You have</span>
          <span className="text-white font-bold text-3xl">
            {numberOfMatches}
          </span>
          <span className="text-white">Matching items</span>
        </div>
      </div>
    </div>
  );
}
