import { AiFillShop } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function index() {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-20 flex justify-center items-center p-10 ">
      {/* <div className="flex flex-col gap-1 items-center justify-center">
        <AiFillHome className="text-lg" />
        <span className="text-gray-400">Home</span>
      </div> */}
      <div
        className="flex flex-col gap-1 items-center justify-center bg-rose-500 p-3 rounded-3xl"
        onClick={() => navigate("/sell")}
      >
        <AiFillShop className="text-white text-lg" />
        <span className="text-white">Sell</span>
      </div>
      {/* <div className="flex flex-col gap-1 items-center justify-center">
        <AiOutlineLogout />
        <span className="text-gray-400">Logout</span>
      </div> */}
    </div>
  );
}
