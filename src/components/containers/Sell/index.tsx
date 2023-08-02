import { useState, useEffect } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import SelectProductTypeFormControl from "../SelectProductTypeFormControl";
import SellersLocationFormControl from "../SellersLocationFormControl";
import ProductRepo from "../../../repository/productRepo";
import ProductImageUploadFormControl from "../ProductImageUploadFromControl";
import UserRepo from "../../../repository/userRepo";
import Logo from "../../presentation/Logo";
export default function index() {
  const [messageApi, messageContext] = message.useMessage();
  const navigate = useNavigate();
  const messageKey = "status";
  const productRepo = new ProductRepo();
  const userRepo = new UserRepo();

  const [productTypeFormControl, setProductTypeFormControl] =
    useState<string>("TECH");
  const [priceFormControl, setPriceFormControl] = useState<any>("");

  const [itemDescriptionFormControl, setItemDescriptionFormControl] =
    useState<any>();
  const [regionNameFormControl, setRegionNameFormControl] =
    useState<any>("Amhara");
  const [cityNameFormControl, setNameCityFormControl] = useState<any>();
  const [productImageFormControl, setProductImageFormControl] = useState<any>();

  async function handleSubmit(e: React.MouseEvent<HTMLInputElement>) {
    try {
      e.preventDefault();
      messageApi.open({
        type: "loading",
        key: messageKey,
        content: "Creating post...",
      });

      const formData = new FormData();
      formData.append("status", "active");
      formData.append("region", regionNameFormControl);
      formData.append("location", cityNameFormControl);
      formData.append("description", itemDescriptionFormControl);
      formData.append("price", priceFormControl);
      formData.append("catalog_type", productTypeFormControl);
      formData.append("picture", productImageFormControl[0]);

      const response = await productRepo.createProduct(formData);
      console.log(response);
      messageApi.open({
        type: "success",
        key: messageKey,
        content: "Successfully created post",
        duration: 3000,
      });
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    userRepo.isAuthenticated() ? null : navigate("/login?redirect_uri=/sell");
  }, []);
  return (
    <div className="grid grid-cols-1 p-1 lg:grid-cols-12 gap-1  bg-white">
      {messageContext}

      <div className="shadow-md p-2 grid gap-5 grid-cols-1 lg:col-start-5 lg:col-end-9   py-10 px-10 bg-white">
        <div className="h-[200px] flex items-center justify-center">
          <Logo />
        </div>
        <span className="text-3xl font-bold text-black ">
          Sell product in Kian
        </span>
        <SelectProductTypeFormControl
          productTypeFormControl={productTypeFormControl}
          setProductTypeFormControl={setProductTypeFormControl}
        />
        <div className="grid grid-cols-1 gap-1">
          <span className="text-md text-gray-700">Set price range</span>
          <div className="grid grid-cols-1 gap-2">
            <input
              type="text"
              className="border-2 border-gray-300 rounded-xl h-10"
              placeholder="Minium price"
              value={priceFormControl}
              onChange={(e) => setPriceFormControl(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1">
          <span className="text-md text-gray-700">
            Desribe the state of item
          </span>
          <textarea
            name=""
            id=""
            className="border-2 border-gray-300 rounded-xl h-40"
            placeholder="Description of Item"
            value={itemDescriptionFormControl}
            onChange={(e) => setItemDescriptionFormControl(e.target.value)}
          ></textarea>
        </div>
        <SellersLocationFormControl
          regionNameFormControl={regionNameFormControl}
          setRegionNameFormControl={setRegionNameFormControl}
          cityNameFormControl={cityNameFormControl}
          setCityNameFormControl={setNameCityFormControl}
        />
        <ProductImageUploadFormControl
          setProductImageFormControl={setProductImageFormControl}
        />
        <input
          type="submit"
          className="bg-rose-500 rounded-xl border-1 border-white-300 text-white p-2"
          onClick={(e) => handleSubmit(e)}
        />
      </div>
    </div>
  );
}
