import { AiFillCaretRight } from "react-icons/ai";
export default function index({ onClick }: any) {
  return (
    <div className="grid grid-cols-12 my-2" onClick={onClick}>
      <div className="col-start-2 col-end-12 border-2 border-gray-300 p-6 grid grid-cols-12">
        <div className="flex flex-cols col-start-1 col-end-10">
          <span className="text-lg font-bold text-gray-500">
            Sell your products
          </span>
        </div>
        <div className="col-start-11 col-end-span flex items-center">
          <AiFillCaretRight />
        </div>
      </div>
    </div>
  );
}
