<div className="navbar bg-base-100 bg-neutral">
    <div className="flex-1">
        <img src={logo} alt="Logo" className="h-20" />
    </div>
  <div className="navbar-end">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/"><FontAwesomeIcon icon={faHome} className="mr-2" />Inicio</Link></li>
            <li><Link to="/tienda"><FontAwesomeIcon icon={faStore} className="mr-2" />Tienda</Link></li>
            <li><Link to="/nosotros"><FontAwesomeIcon icon={faUserFriends} className="mr-2" />Nosotros</Link></li>
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
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/"><FontAwesomeIcon icon={faHome} className="mr-2" />Inicio</Link></li>
            <li><Link to="/tienda"><FontAwesomeIcon icon={faStore} className="mr-2" />Tienda</Link></li>
            <li><Link to="/nosotros"><FontAwesomeIcon icon={faUserFriends} className="mr-2" />Nosotros</Link></li>
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

  <div className="dropdown  ml-20 mr-6">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white">
            <div className="indicator">
              <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
              <span className="badge badge-sm indicator-item">{cartCount}</span>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
            <span className="font-bold text-lg">{cartCount} Item(s)</span>
              <span className="text-info">Subtotal: ${subtotal.toFixed(2)}</span>
              <div className="card-actions">
              <Link to="/carrito"><button className="btn btn-primary btn-block">Ver carrito</button></Link>
              </div>
            </div>
          </div>
        </div>
</div>


