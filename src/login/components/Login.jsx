import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLogin } from '../../hooks';

export function Login({ setAuth }) {
  const { user, setUser, password, setPassword, handleSubmit } = useLogin({ setAuth });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="p-10 bg-gray-800 rounded-lg flex justify-center items-center flex-col shadow-xl">
        <p className="mb-5 text-3xl uppercase text-white">Inicio de sesión</p>
        <input
          type="text"
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Usuario"
          className="mb-5 p-3 w-80 border rounded-lg border-gray-700 bg-gray-700 text-white"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="mb-5 p-3 w-80 border rounded-lg border-gray-700 bg-gray-700 text-white"
          required
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Iniciar Sesión
        </button>
        <br />
        <div>
          <label htmlFor="no-tienes-cuenta" className='border-gray-700 text-white'>No tienes cuenta? </label>
          <Link to="/registro" className='border-gray-700 text-white'>
            <span><strong className='border-gray-700 text-white'>Regístrate</strong></span>
          </Link>
        </div>
        <br />
        <div className='border-gray-700 text-white'>
          <Link to="/" className="link-button border-gray-700 text-white">
          <span><strong className='border-gray-700 text-white'>Retornar a Home</strong></span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
