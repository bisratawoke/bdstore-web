import { IProduct } from "../../../domain/models";
import Config from "../../../config/config";
export default function index(props: IProduct) {
  return (
    <div className="flex flex-col gap-2 p-6">
      <img
        src={`${Config.getBaseUrl()}/${props.picture_url}`}
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
