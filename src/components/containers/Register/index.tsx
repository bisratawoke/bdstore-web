import Logo from "../../presentation/Logo";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useState } from "react";
import UserRepo from "../../../repository/userRepo";
import { useSearchParams } from "react-router-dom";
export default function index() {
  const navigate = useNavigate();
  const [messageApi, messageContext] = message.useMessage();
  const messageKey = "key";
  const [emailFormControl, setEmailFormControl] = useState<string>("");
  const [phoneNumberFormControl, setPhoneNumberFormControl] =
    useState<string>("");
  const [passwordFormControl, setPasswordFormControl] = useState<string>("");
  const [firstNameFormControl, setFirstNameFormControl] = useState<string>("");
  const [lastNameFormControl, setLastNameFormControl] = useState<string>("");
  const [params] = useSearchParams();
  const userRepo = new UserRepo();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      messageApi.open({
        type: "loading",
        content: "Creating account...",
        key: messageKey,
      });
      const user = {
        email: emailFormControl,
        password: passwordFormControl,
        first_name: firstNameFormControl,
        last_name: lastNameFormControl,
        phone_number: phoneNumberFormControl,
      };
      await userRepo.register(user);
      messageApi.open({
        type: "success",
        content: "Account successfully created...",
        duration: 2000,
        key: messageKey,
      });
      setTimeout(() => {
        navigate(`${params.get("redirect_url")}`);
      }, 2000);
    } catch (error: any) {
      console.log(error);
      messageApi.open({
        type: "error",
        content: error.message,
        key: messageKey,
      });
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      {messageContext}
      <div className="lg:col-start-5 lg:col-end-9">
        <div className="h-[200px] flex">
          <Logo />
        </div>
        <form
          className="flex flex-col justify-center gap-5 px-10"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-1">
            <span className="text-3xl font-bold text-black">
              Create an account
            </span>
            <span className="text-md font-normal text-gray-700">
              {" "}
              Already have an account?{" "}
              <span
                className="text-green-600 hover:cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="First name"
              className="border-2 border-gray-300 rounded-lg py-2"
              value={firstNameFormControl}
              onChange={(e) => setFirstNameFormControl(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              className="border-2 border-gray-300 rounded-lg py-2"
              value={lastNameFormControl}
              onChange={(e) => setLastNameFormControl(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Email"
              className="border-2 border-gray-300 rounded-lg py-2"
              value={emailFormControl}
              onChange={(e) => setEmailFormControl(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border-2 border-gray-300 rounded-lg py-2"
              value={phoneNumberFormControl}
              onChange={(e) => setPhoneNumberFormControl(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Password"
              className="border-2 border-gray-300 rounded-lg py-2"
              value={passwordFormControl}
              onChange={(e) => setPasswordFormControl(e.target.value)}
              required
            />
          </div>
          <input
            type="submit"
            value="Create an account"
            className="border-1 border-white bg-rose-500 rounded-lg text-white py-3 font-bold hover:cursor-pointer hover:bg-rose-400"
          />
        </form>
      </div>
    </div>
  );
}
