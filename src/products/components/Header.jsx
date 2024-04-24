import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faStore,
  faUserFriends,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logoss.png';
import { MenuDesplegable } from '../../login/components/MenuDesplegable';

export const Header = ({ isAuth, setAuth }) => {
  const [cartCount, setCartCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const updateCartInfo = () => {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
      const itemSubtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
      setCartCount(itemCount);
      setSubtotal(itemSubtotal);
    };
  
    updateCartInfo();
  
    // Agregar listener para el evento 'cartUpdated'
    window.addEventListener('cartUpdated', updateCartInfo);
  
    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('cartUpdated', updateCartInfo);
    };
  }, []);

  // Función para determinar si un enlace está activo
  const isActiveLink = (pathname) => {
    return location.pathname === pathname ? 'border-b-2 border-orange-500' : '';
  };

  return (
    <div className="navbar bg-base-100 bg-neutral text-primary-content">
      <div className="content-end">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-20" />
        </Link>
      </div>
      <div className="navbar-start text-neutral-content">
        <div className="dropdown bg-neutral">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52">
            <li><Link to="/" className={`${isActiveLink('/')} p-1`}><FontAwesomeIcon icon={faHome} className="mr-2" />Inicio</Link></li>
            <li><Link to="/tienda" className={`${isActiveLink('/tienda')} p-1`}><FontAwesomeIcon icon={faStore} className="mr-2" />Tienda</Link></li>
            <li><Link to="/nosotros" className={`${isActiveLink('/nosotros')} p-1`}><FontAwesomeIcon icon={faUserFriends} className="mr-2" />Nosotros</Link></li>
          </ul>    
        </div>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/" className={`${isActiveLink('/')}`}><FontAwesomeIcon icon={faHome} className="mr-2" />Inicio</Link></li>
          <li><Link to="/tienda" className={`${isActiveLink('/tienda')}`}><FontAwesomeIcon icon={faStore} className="mr-2" />Tienda</Link></li>
          <li><Link to="/nosotros" className={`${isActiveLink('/nosotros')}`}><FontAwesomeIcon icon={faUserFriends} className="mr-2" />Nosotros</Link></li>
        </ul>  
      </div>
      <div className="dropdown  dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
            <span className="badge badge-sm indicator-item">{cartCount}</span>
          </div>
        </div>
        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
            <span className="font-bold text-lg text-black">{cartCount} Producto(s)</span>
            <span className="text-info">Subtotal: ${subtotal.toFixed(2)}</span>
            <div className="card-actions">
              <Link to="/carrito"><button className="btn btn-primary btn-block">Ver carrito</button></Link>
            </div>
          </div>
        </div>
      </div>
      <MenuDesplegable className="pr -23" setAuth={setAuth}/>
    </div>
  );
};
