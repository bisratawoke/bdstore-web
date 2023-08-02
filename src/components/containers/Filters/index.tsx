import { useEffect, useState } from "react";
import { ICategorie } from "../../../domain/models";
import CategorieRepo from "../../../repository/categorieRepo";
import Categorie from "../../presentation/Categorie";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentProductCategory } from "./filterSlice";

export default function index() {
  const [categories, setCategories] = useState<ICategorie[]>();
  const categorieRepo = new CategorieRepo();
  const filters = useSelector((state: any) => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    categorieRepo
      .getCategoriesFromDb()
      .then((categories: ICategorie[]) => {
        setCategories(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex gap-10 lg:col-start-1 lg:col-end-13 lg:grid lg:grid-cols-12  scrollbar-hide overflow-x-scroll p-2  bg-white border-b-2 border-gray-100 ">
        {categories?.map((categorie: ICategorie) => {
          const props = {
            ...categorie,
            isChosen:
              filters.current.category.toLowerCase() ==
              categorie.title.toLowerCase(),
          };

          return (
            <div
              key={categorie.title}
              className="hover:cursor-pointer"
              onClick={() => {
                dispatch(setCurrentProductCategory(categorie.title));
              }}
            >
              <Categorie key={Math.random()} {...props} />
            </div>
          );
        })}
      </div>
    </>
  );
}
