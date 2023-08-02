import Filters from "../Filters";
import Header from "../Header";
import Products from "../Products";
import BottomNav from "../BottomNav";
import { authenticate } from "../Auth/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import UserRepo from "../../../repository/userRepo";
function Home() {
  const dispatch = useDispatch();
  const userRepo = new UserRepo();
  useEffect(() => {
    userRepo.isAuthenticated() ? dispatch(authenticate()) : null;
  }, []);
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
