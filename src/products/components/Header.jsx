import logo from '../../images/logoss.png'; // Importa la imagen
import { Link } from 'react-router-dom'; // Importa Link si estás utilizando React Router

export const Header = () => {
    return (
        <div className="navbar bg-base-100 bg-neutral">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-1">
                    <img src={logo} alt="Logo" className="h-20" /> {/* Muestra el logo */}
                </div>

                <div className="flex-none">
                <ul className="flex space-x-24 text-neutral-content justify-center">
                    <li><Link to="/" className="hover:text-gray-300 text-lg font-bold">Inicio</Link></li>
                    <li><Link to="/tienda" className="hover:text-gray-300 text-lg font-bold">Tienda</Link></li>
                    <li><Link to="/marca" className="hover:text-gray-300 text-lg font-bold">Marca</Link></li>
                    <li><Link to="/oferta" className="hover:text-gray-300 text-lg font-bold">Oferta</Link></li>
                    <li><Link to="/categoria" className="hover:text-gray-300 text-lg font-bold">Categoría</Link></li>
                </ul>

                </div>

                <div className="dropdown dropdown-end ml-20 mr-6">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0 2 2 0 01-4 0z" /></svg>
                            <span className="badge badge-sm indicator-item ">8</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
