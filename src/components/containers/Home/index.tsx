import Filters from "../Filters";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../../store/store";
import Products from "../Products";
import AskUsersToSell from "../../presentation/AskUserToSellProduct/";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BottomNav from "../BottomNav";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-start-1 lg:col-end-13">
        <div className="sticky top-0">
          <Header />
          <Filters />
        </div>
        <Products />
        <div className="sticky bottom-0 lg:hidden">
          <BottomNav />
        </div>
      </div>
    </div>
  );
}

export default Home;
