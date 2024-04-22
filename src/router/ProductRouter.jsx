import { Routes, Route } from "react-router-dom";
import { ProductPage } from "../products";
import { LoginPage } from "../login";
import { AboutUs, CartPage } from "../products/components";
import { Register } from "../login/components";

export const ProductRouter = ({ isAuth, setAuth }) => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage isAuth={isAuth} setAuth={setAuth} />} />
      <Route path="/tienda" element={<ProductPage isAuth={isAuth} setAuth={setAuth} />} />
      <Route path="/login" element={<LoginPage isAuth={isAuth} setAuth={setAuth} />} />
      <Route path="/registro" element={<Register setAuth={setAuth} />} />
      <Route path="/carrito" element={<CartPage />} />
      <Route path="/nosotros" element={<AboutUs setAuth={setAuth} />} />
    </Routes>
  );
};
