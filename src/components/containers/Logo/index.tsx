import LocalStorage from "../../../database/localStorage";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { logout } from "../Auth/authSlice";
export default function index() {
  const localStorage = new LocalStorage();
  const [messageApi, messageContext] = message.useMessage();
  const dispatch = useDispatch();
  const key = "key";
  const clickHandler = (e: React.MouseEvent) => {
    messageApi.open({
      key,
      type: "loading",
      content: "logging out",
      duration: 3000,
    });
    e.preventDefault();
    localStorage.deleteToken();
    dispatch(logout());
    messageApi.open({
      key,
      type: "success",
      content: "successfully logged out",
      duration: 3000,
    });
  };
  return <span onClick={clickHandler}>{messageContext}Logout</span>;
}
