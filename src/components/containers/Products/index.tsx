import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type productRepo from "../../../repository/productRepo";
import ProductRepo from "../../../repository/productRepo";
import { IProduct } from "../../../domain/models";
import Product from "../../presentation/Product";
import logo from "../../../assets/logo.png";
export default function index() {
  const productRepo: productRepo = new ProductRepo();
  const [products, setProducts] = useState<Array<IProduct>>();
  const filters = useSelector((state: any) => state.filter);
  useEffect(() => {
    productRepo
      .getProducts(filters.current)
      .then((products: Array<IProduct>) => {
        console.log("here");
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters.current]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 ">
      {products && products?.length < 1 ? (
        <div className="h-screen w-screen flex items-center  flex-col ">
          <img src={logo} />
          <span>Not items found</span>
        </div>
      ) : (
        <></>
      )}
      {products?.map((product: IProduct) => {
        return <Product {...product} />;
      })}
    </div>
  );
}
