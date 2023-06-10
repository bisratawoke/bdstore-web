import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type productRepo from "../../../repository/productRepo";
import ProductRepo from "../../../repository/productRepo";
import { IProduct } from "../../../domain/models";
import Product from "../../presentation/Product";
export default function index() {
  const productRepo: productRepo = new ProductRepo();
  const [products, setProducts] = useState<Array<IProduct>>();
  const filters = useSelector((state: any) => state.filter);
  useEffect(() => {
    console.log("============ in products ================");
    console.log(filters.current);
    productRepo
      .getProductsFromDb(filters.current)
      .then((products: Array<IProduct>) => {
        console.log("============ in products ================");
        console.log(products);
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters.current]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 ">
      {products?.map((product: IProduct) => {
        return <Product {...product} />;
      })}
    </div>
  );
}
