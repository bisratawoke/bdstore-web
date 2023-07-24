import Filters from "../Filters";
import Header from "../Header";

import Products from "../Products";

import BottomNav from "../BottomNav";
function Home() {
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
