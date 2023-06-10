import { IProduct } from "../../../domain/models";

export default function index(props: IProduct) {
  return (
    <div className="flex flex-col gap-2 p-6">
      <img
        src={`${props.picture_url}`}
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="font-bold">{props.location}</span>
          <span className="text-bold text-gray-500 text-sm">
            {props.status}
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
