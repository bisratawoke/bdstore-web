import logo from "../../../assets/logo.png";
export default function index() {
  return (
    <div className="text-red-500  flex items-center">
      <div>
        <img src={logo} className="h-fill" alt="logo" />
      </div>
    </div>
  );
}
