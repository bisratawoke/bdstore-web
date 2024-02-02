import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type productRepo from "../../../repository/productRepo";
import ProductRepo from "../../../repository/productRepo";
import { IProduct } from "../../../domain/models";
import Product from "../../presentation/Product";
import logo from "../../../assets/logo.png";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
export default function index() {
  const productRepo: productRepo = new ProductRepo();
  const [products, setProducts] = useState<Array<IProduct> | null>(null);
  const filters = useSelector((state: any) => state.filter);

  useEffect(() => {
    productRepo
      .getProducts(filters.current)
      .then((products: Array<IProduct>) => {
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filters.current]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 ">
      {products == null ? (
        <div className="lg:col-start-3 lg:col-end-10">
          <div className="h-[screen] w-[screen]  flex items-center  overscroll-none py-20 flex-col">
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            />
          </div>
        </div>
      ) : (
        <>
          {products && products?.length < 1 ? (
            <div className="h-[screen] w-[screen]  lg:col-start-3 lg:col-end-10 overscroll-none  flex items-center  flex-col ">
              <img src={logo} />
              <span>Not items found</span>
            </div>
          ) : (
            <>
              {products?.map((product: IProduct) => {
                return <Product {...product} />;
              })}
            </>
          )}
        </>
      )}
    </div>
  );
}
