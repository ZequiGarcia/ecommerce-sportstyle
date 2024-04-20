import { Routes, Route } from "react-router-dom";
import { ProductPage } from "../products";
import Login from '../components/Login'; // Si 'Login.jsx' está directamente en la carpeta 'components'
import Register from '../components/Register'; // Si 'Register.jsx' está directamente en la carpeta 'components'
export const ProductRouter = ({ isAuth, setAuth }) => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage isAuth={isAuth} setAuth={setAuth} />} />
      <Route path="/login" element={<Login setAuth={setAuth} />} />
      <Route path="/registro" element={<Register setAuth={setAuth} />} />
      {/* Puedes agregar más rutas según necesites */}
    </Routes>
  );
};
