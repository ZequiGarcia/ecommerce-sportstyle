import React from 'react';
import logo from '../assets/logoss.png'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

function Header() {
  return (
    <header className="bg-dark text-white py-3"> {}
      <div className="container d-flex justify-content-between align-items-center"> {}
        <div className="d-flex align-items-center"> {}
          <img src={logo} alt="Logo" className="h-20 me-3" /> {}
          <span className="fs-1 ">SportStyle</span> {}
        </div>
        <nav className="ms-auto"> {}
          <ul className="d-flex list-unstyled gap-5"> {}
            
            <li><a href="#" className="text-white text-decoration-none fs-3 fuente ">Inicio</a></li> 
            <li><a href="#" className="text-white text-decoration-none fs-3 fuente">Tienda</a></li>
            <li><a href="#" className="text-white text-decoration-none fs-3 fuente">Marcas</a></li>
            <li><a href="#" className="text-white text-decoration-none fs-3 fuente">Ofertas</a></li> 
            <li><a href="#" className="text-white text-decoration-none fs-3 fuente">Categoria</a></li> 
            <li><a href="/login" className="text-white text-decoration-none fs-3 fuente">Iniciar Sesión</a></li>
            <li><a href="/register" className="text-white text-decoration-none fs-3 fuente">Registrarse</a></li>

          </ul>
        </nav>
        <div className='ms-5'> {/* Contenedor para el ícono del carrito de compras y la cantidad de productos */}
          <FontAwesomeIcon icon={faShoppingCart} className="text-white fs-3" /> {/* Mostramos el ícono del carrito de compras */}
          <span className="badge bg-secondary ms-3">3</span> {/* Ejemplo de cantidad de productos en el carrito */}
        </div>
      </div>
    </header>
  );
}

export default Header;
