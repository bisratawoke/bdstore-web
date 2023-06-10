import Filters from "./components/containers/Filters";
import Header from "./components/containers/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import Products from "./components/containers/Products";
function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-start-3 lg:col-end-11">
        <Provider store={store}>
          <div className="sticky top-0">
            <Header />
          </div>
          <Filters />
          <Products />
        </Provider>
      </div>
    </div>
  );
}

export default App;
