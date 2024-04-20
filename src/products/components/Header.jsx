import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faStore,
  faTags,
  faGift,
  faList,
  faSignInAlt,
  faUserPlus,
  faSignOutAlt,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logoss.png'; // Asegúrate de que la ruta a la imagen sea la correcta

export const Header = ({ isAuth, setAuth }) => {
  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem('user'); // Elimina el usuario de localStorage
    setAuth(false); // Actualiza el estado de autenticación
  };

  return (
    <div className="navbar bg-base-100 bg-neutral">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <img src={logo} alt="Logo" className="h-20" />
        </div>

        <div className="flex-none">
          <ul className="flex space-x-24 text-neutral-content justify-center">
            <li><Link to="/"><FontAwesomeIcon icon={faHome} className="mr-2" />Inicio</Link></li>
            <li><Link to="/tienda"><FontAwesomeIcon icon={faStore} className="mr-2" />Tienda</Link></li>
            <li><Link to="/marca"><FontAwesomeIcon icon={faTags} className="mr-2" />Marca</Link></li>
            <li><Link to="/oferta"><FontAwesomeIcon icon={faGift} className="mr-2" />Oferta</Link></li>
            <li><Link to="/categoria"><FontAwesomeIcon icon={faList} className="mr-2" />Categoría</Link></li>
            {isAuth ? (
              <li>
                <button onClick={handleLogout} className="text-white text-decoration-none fs-3 fuente">
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />Cerrar Sesión
                </button>
              </li>
            ) : (
              <>
                <li><Link to="/login"><FontAwesomeIcon icon={faSignInAlt} className="mr-2" />Login</Link></li>
                <li><Link to="/registro"><FontAwesomeIcon icon={faUserPlus} className="mr-2" />Registro</Link></li>
                
              </>
            )}
          </ul>
        </div>

        <div className="dropdown dropdown-end ml-20 mr-6">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white">
            <div className="indicator">
              <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
              <Link to="/carrito"><button className="btn btn-primary btn-block">Ver carrito</button></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
