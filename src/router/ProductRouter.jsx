import { Routes, Route } from "react-router-dom";
import { ProductPage } from "../products";
import Login from '../components/Login';
import Register from '../components/Register'; 
import CartPage from '../components/CartPage'; 

export const ProductRouter = ({ isAuth, setAuth }) => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage isAuth={isAuth} setAuth={setAuth} />} />
      <Route path="/login" element={<Login setAuth={setAuth} />} />
      <Route path="/registro" element={<Register setAuth={setAuth} />} />
      <Route path="/carrito" element={<CartPage />} />

    </Routes>
  );
};
