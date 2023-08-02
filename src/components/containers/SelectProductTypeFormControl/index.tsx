import { useEffect, useState } from "react";

import CategorieRepo from "../../../repository/categorieRepo";
import { ICategorie } from "../../../domain/models";
export default function index({
  productTypeFormControl,
  setProductTypeFormControl,
}: {
  productTypeFormControl: any;
  setProductTypeFormControl: any;
}) {
  const categorieRepo = new CategorieRepo();
  const [categories, setCategories] = useState<ICategorie[] | null>(null);
  useEffect(() => {
    categorieRepo.getCategories().then((data: ICategorie[]) => {
      const result = data.filter(
        (categorie) => !!categorie.title.indexOf("New")
      );
      setCategories(result);
    });
  }, []);
  return (
    <div className="grid grid-cols-1 gap-1">
      <label className="text-md text-gray-700">Select product type</label>

      <select
        name=""
        id=""
        className="border-2 border-gray-300 rounded-xl p-2"
        onChange={(e) => {
          setProductTypeFormControl(e.target.value);
        }}
        value={productTypeFormControl}
      >
        {categories != null ? (
          <>
            {categories.map((categorie: ICategorie, indx: number) => {
              if (indx == 0) {
                setProductTypeFormControl(categorie.title);
              }
              return (
                <option value={`${categorie.title}`} selected>
                  {categorie.title}
                </option>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </select>
    </div>
  );
}
