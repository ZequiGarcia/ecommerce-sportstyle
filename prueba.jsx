import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUserFriends, 
  faHome, 
  faStore, 
  faSignInAlt, 
  faUserPlus, 
  faSignOutAlt, 
  faShoppingCart, 
  faBars 
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logoss.png";

export const Header = ({ isAuth, setAuth }) => {
  const [cartCount, setCartCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // Estado del menú

  useEffect(() => {
    const updateCartInfo = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const itemCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const itemSubtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      setCartCount(itemCount);
      setSubtotal(itemSubtotal);
    };

    updateCartInfo();

    // Agregar listener para el evento 'cartUpdated'
    window.addEventListener("cartUpdated", updateCartInfo);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("cartUpdated", updateCartInfo);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuth(false);
  };

  return (
    
    <div className="bg-neutral">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 lg:h-20" />
          {/* Menú para dispositivos grandes */}
          <ul className="hidden lg:flex ml-8 space-x-8 text-neutral-content">
            <li>
              <Link to="/" className="hover:text-primary">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/tienda" className="hover:text-primary">
                <FontAwesomeIcon icon={faStore} className="mr-2" />
                Tienda
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-primary">
                <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
                Nosotros
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          {/* Carrito solo visible en dispositivos grandes */}
          <div className="dropdown  dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white">
          <div className="indicator">
            <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
            <span className="badge badge-sm indicator-item">{cartCount}</span>
          </div>
        </div>
        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
          <span className="font-bold text-lg text-black">{cartCount} Item(s)</span>
            <span className="text-info">Subtotal: ${subtotal.toFixed(2)}</span>
            <div className="card-actions">
            <Link to="/carrito"><button className="btn btn-primary btn-block">Ver carrito</button></Link>
            </div>
          </div>
        </div>
          {/* Botón de inicio de sesión y registro solo en dispositivos grandes */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Renderizado condicional de los botones */}
            {isAuth ? (
              <button onClick={handleLogout} className="text-neutral-content hover:text-primary">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                <span className="hidden lg:inline">Cerrar Sesión</span>
              </button>
            ) : (
              <>
                <Link to="/login" className="text-neutral-content hover:text-primary">
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                  <span className="hidden lg:inline">Login</span>
                </Link>
                <Link to="/registro" className="text-neutral-content hover:text-primary">
                  <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                  <span className="hidden lg:inline">Registro</span>
                </Link>
              </>
            )}
          </div>
          {/* Avatar siempre visible */}
            <MEnuDesplegable/>

          {/* Botón de menú para dispositivos pequeños */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-neutral-content"
          >
            <FontAwesomeIcon icon={faBars} className="h-6 lg:h-8" />
          </button>
        </div>
      </div>
      {/* Menú desplegable en dispositivos pequeños */}
      <ul
        className={`lg:hidden bg-base-100 text-base-content space-y-2 py-2 px-4 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link to="/" className="hover:text-primary">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/tienda" className="hover:text-primary">
            <FontAwesomeIcon icon={faStore} className="mr-2" />
            Tienda
          </Link>
        </li>
        <li>
          <Link to="/nosotros" className="hover:text-primary">
            <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
            Nosotros
          </Link>
        </li>
        {!isAuth && (
          <>
            <li>
              <Link to="/login" className="hover:text-primary">
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Login
              </Link>
            </li>
            <li><Link to="/registro" className="hover:text-primary"><FontAwesomeIcon icon={faUserPlus} className="mr-2" />Registro</Link>
            </li>
          </>
        )}
      </ul>
    </div>
    </div>
  );
};