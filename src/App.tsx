//Router
import { Routes, Route } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";
//Pages
import Products from "./pages/Products";
import Visuals from "./pages/Visuals";
import Sale from "./pages/Sale";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="" element={<Home />} />
        <Route path="visuals" element={<Visuals />} />
        <Route path="sale" element={<Sale />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Provider>
  );
}

export default App;
