import { IProduct } from "../../../domain/models";
import { useNavigate } from "react-router-dom";
export default function index(props: IProduct) {
  const navigate = useNavigate();
  const productClickHandler = (id: string) => {
    try {
      navigate(`/product/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="flex flex-col gap-2 p-6"
      onClick={() => productClickHandler(props.id)}
    >
      <img
        src={`${
          props.picture_url == null
            ? `data:image/png;base64, ${props.picture}`
            : props.picture_url
        }`}
        className="object-cover w-full h-full lg:w-[323px] lg:h-[307px] rounded-lg"
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="font-bold">{props.location}</span>
          <span className="text-bold text-gray-500 text-sm">
            {props.region_name}
          </span>
          <span className="text-bold text-gray-500 text-sm">
            {props.description}
          </span>
        </div>
        <span>${props.price}</span>
      </div>
    </div>
  );
}
