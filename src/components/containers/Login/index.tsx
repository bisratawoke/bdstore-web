import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useState } from "react";
import UserRepo from "../../../repository/userRepo";
import Logo from "../../presentation/Logo";
export default function index() {
  const navigate = useNavigate();
  const [messageApi, messageContext] = message.useMessage();
  const messageKey = "key";
  const [emailFormControl, setEmailFormControl] = useState<string>("");
  const [passwordFormControl, setPasswordFormControl] = useState<string>("");
  const userRepo = new UserRepo();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      messageApi.open({
        key: messageKey,
        type: "loading",
        content: "Verifying credentials...",
      });

      const user = {
        email: emailFormControl,
        password: passwordFormControl,
      };
      await userRepo.login(user);

      messageApi.open({
        key: messageKey,
        type: "success",
        content: "Welcome back !",
      });
    } catch (error) {
      console.log(error);
      messageApi.open({
        key: messageKey,
        type: "error",
        content: "Invalid credentials! Please try again",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      {messageContext}
      <div className="lg:col-start-5 lg:col-end-9">
        <div className="h-[200px] flex items-center justify-center">
          <Logo />
        </div>
        <form
          className="flex flex-col justify-center gap-5 px-10"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-1">
            <span className="text-3xl font-bold text-black">Log in</span>
            <span className="text-md font-normal text-gray-700">
              {" "}
              New to Store?{" "}
              <span
                className="text-green-600 hover:cursor-pointer hover:text-green-500"
                onClick={() => navigate("/register")}
              >
                Create an account
              </span>
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Email"
              className="border-2 border-gray-300 rounded-lg py-2"
              value={emailFormControl}
              onChange={(e) => setEmailFormControl(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              className="border-2 border-gray-300 rounded-lg py-2"
              value={passwordFormControl}
              onChange={(e) => setPasswordFormControl(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Log in"
            className="border-1 border-white bg-rose-500 rounded-lg text-white py-3 font-bold hover:cursor-pointer hover:bg-rose-400"
          />
        </form>
      </div>
    </div>
  );
}
