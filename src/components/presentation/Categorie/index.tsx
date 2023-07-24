import { ICategorie } from "../../../domain/models";

interface props extends ICategorie {
  isChosen: boolean;
}
export default function index(props: props) {
  return (
    <div className="flex flex-col items-center gap-2">
      {props.icon}
      <span className="text-gray-600 text-xs font-sans">{props.title}</span>
      {props.isChosen == true ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="1">
          <line x1="0" y1="0" x2="200" y2="0" stroke="green" stroke-width="5" />
        </svg>
      ) : (
        <></>
      )}
    </div>
  );
}
