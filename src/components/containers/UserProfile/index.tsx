import { AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
export default function index() {
  return (
    <div className="flex gap-2  border-2 border-gray-200 p-3 rounded-3xl hover:shadow hover:cursor-pointer">
      <GiHamburgerMenu className="text-xl" />
      <AiOutlineUser className="text-xl" />
    </div>
  );
}
