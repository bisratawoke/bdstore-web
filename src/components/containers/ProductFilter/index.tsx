import React, { useEffect, useState } from "react";
import { ICategorie } from "../../../domain/models";
import CategorieRepo from "../../../repository/categorieRepo";
import { filterTypes } from "../FilterType";

export default function index({
  setFilterType,
}: {
  setFilterType: React.Dispatch<React.SetStateAction<filterTypes>>;
}) {
  const categorieRepo = new CategorieRepo();
  const [categorie, setCategories] = useState<ICategorie[]>([]);
  useEffect(() => {
    categorieRepo.getCategoriesFromDb().then((res) => {
      setCategories(res);
    });
  }, []);

  const storeChosenFilter = async (categorieName: string) => {
    try {
      await categorieRepo.storeChosenCategory(categorieName);
      setFilterType(filterTypes.PRICE_RANGE);
    } catch (error) {
      console.log(error);
    }
  };

  const filterProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    categorieRepo.getCategoriesFromDb(e.target.value).then((res) => {
      setCategories(res);
    });
  };
  return (
    <div className="flex flex-col bg-white gap-5 p-5 rounded-xl py-10">
      <span className="text-2xl font-medium text-gray-800 text-black-500">
        Pick Product Type
      </span>
      <input
        placeholder="Search Product Type"
        className="rounded-xl p-4 border-2 border-gray-300"
        onChange={filterProducts}
      />

      <div className="grid grid-cols-3 gap-10 scrollbar-hide overflow-x-scroll my-5">
        {categorie.map((categorie: ICategorie) => (
          <div
            className="flex flex-col items-center gap-2"
            onClick={() => storeChosenFilter(categorie.title)}
          >
            {categorie.icon}
            <span className="text-gray-400 text-sm">{categorie.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
