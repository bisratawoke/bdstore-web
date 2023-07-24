import React, { useEffect, useState } from "react";
import { ICategorie } from "../../../domain/models";
import CategorieRepo from "../../../repository/categorieRepo";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function index() {
  const categorieRepo = new CategorieRepo();
  const navigate = useNavigate();
  const [categorie, setCategories] = useState<ICategorie[]>([]);
  useEffect(() => {
    categorieRepo.getCategoriesFromDb().then((res) => {
      setCategories(res);
    });
  }, []);

  const storeChosenFilter = async (categorieName: string) => {
    try {
      await categorieRepo.storeChosenCategory(categorieName);
      navigate("/filter/price");
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
      <div className="grid grid-cols-1 ">
        <IoArrowBackCircleOutline
          className="text-3xl text-gray-500"
          onClick={() => navigate("/filter")}
        />
      </div>
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
            className="flex flex-col items-center gap-2 hover:cursor-pointer"
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
