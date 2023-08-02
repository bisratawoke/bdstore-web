import { useEffect, useState } from "react";
import { IProduct } from "../../../domain/models";
import { useParams } from "react-router-dom";
import ProductRepo from "../../../repository/productRepo";
import Config from "../../../config/config";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { TbReportMoney } from "react-icons/tb";
type ProductWithUserInfo = {
  owner: { email: string; phone_number: string };
} & IProduct;
export default function index() {
  const [productInfo, setproductInfo] = useState<ProductWithUserInfo | null>(
    null
  );
  const { id } = useParams();
  const productRepo = new ProductRepo();
  const navigate = useNavigate();
  useEffect(() => {
    if (id)
      productRepo
        .getProduct(id)
        .then((product: ProductWithUserInfo) => {
          console.log(product);
          setproductInfo(product);
        })
        .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-1">
      <div className="p-5 bg-white flex flex-cols items-center gap-2">
        <IoArrowBackCircleOutline
          className="text-3xl text-gray-500"
          onClick={() => navigate("/")}
        />
        <span className="text-gray-600">Home</span>
      </div>
      {productInfo != null ? (
        <div>
          <div className="h-['375px'] w-['250px']">
            <img
              src={`${Config.getBaseUrl()}/${productInfo?.picture_url}`}
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className="p-10 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <span className="text-black font-bold">Contact Info</span>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  <BiPhoneCall />
                  <span className="text-black text-lg">
                    {productInfo.owner.phone_number}
                  </span>
                </div>

                <div className="flex gap-2 items-center">
                  <AiOutlineMail />
                  <span className="text-black text-lg">
                    {productInfo.owner.email}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-black font-bold">Price</span>
              <div className="flex gap-2 items-center">
                <TbReportMoney />
                <span className="text-black">{productInfo.price}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-black font-bold">Description</span>

              <span className="text-black">{productInfo.description}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center p-[200px] w-screen">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </div>
      )}
    </div>
  );
}
