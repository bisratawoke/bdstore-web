import { AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "../Logo";
export default function index() {
  const navigate = useNavigate();
  const authContext = useSelector((state: any) => state.auth);
  const [items, setItems] = useState<MenuProps["items"]>();

  useEffect(() => {
    authContext.isAuthenticated
      ? setItems([
          {
            key: "1",
            label: <span onClick={() => navigate("/sell")}>Sell</span>,
          },
          {
            key: "2",
            label: <Logout />,
          },
        ])
      : setItems([
          {
            key: "3",
            label: (
              <span onClick={() => navigate("/login?redirect_uri=/")}>
                Login
              </span>
            ),
          },
          {
            key: "4",
            label: (
              <span onClick={() => navigate("/register?redirect_uri=/")}>
                Register
              </span>
            ),
          },
        ]);
  }, [authContext]);

  return (
    <Dropdown menu={{ items }}>
      <Space>
        <div className="flex gap-2  border-2 border-gray-200 p-3 rounded-3xl hover:shadow hover:cursor-pointer">
          <GiHamburgerMenu className="text-xl" />
          <AiOutlineUser className="text-xl" />
        </div>
      </Space>
    </Dropdown>
  );
}
