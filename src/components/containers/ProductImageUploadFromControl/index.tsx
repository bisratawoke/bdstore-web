import { Dispatch } from "react";
export default function index({
  setProductImageFormControl,
}: {
  setProductImageFormControl: Dispatch<any>;
}) {
  return (
    <div className="grid grid-cols-1 gap-1">
      <span className="text-md text-gray-700">Upload product image</span>
      <div className="border-1 border-gray-300 rounded-xl p-2">
        <input
          type="file"
          onChange={(e) => setProductImageFormControl(e.target.files)}
        />
      </div>
    </div>
  );
}
