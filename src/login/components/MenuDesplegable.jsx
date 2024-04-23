import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const MenuDesplegable = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
        onClick={toggleMenu}
      >
        <div className="w-12  rounded-full">
          <img
            alt="Avatar"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      {mostrarMenu && (
        <div className="dropdown-content">
          <ul>
            <li>
              <Link to="/login">
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Login
              </Link>
            </li>
            <li>
              <Link to="/registro">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Registro
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuDesplegable;
