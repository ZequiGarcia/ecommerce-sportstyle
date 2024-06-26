import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';


export const MenuDesplegable = ({ setAuth }) => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('user'); // Aquí utilizamos setAuth para manejar el cierre de sesión
    toast.success('cierre de sesion exitosa!.', { position: "bottom-right" });
    setMostrarMenu(false);
  };

  return (
    <div className="relative">
      <button
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar "
        onClick={toggleMenu}
      >
        <div className="w-12 rounded-full mt-2">
        <i class="fa-regular fa-circle-user fa-2x"></i>
        </div>
      </button>
      {mostrarMenu && (
        <div className="absolute top-12 right-0 z-10 mt-2 bg-white border border-gray-200 shadow-md rounded-md">
          <ul className="py-1">
            <li>
              <Link
                to="/login"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/registro"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Register
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className=" flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                 <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
