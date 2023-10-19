import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import User from "./Components/User";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/users" element={<User />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
