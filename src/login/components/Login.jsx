import React from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks';

export function Login({ setAuth }) {
  const { email, setEmail, password, setPassword, handleSubmit } = useLogin({ setAuth });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="p-10 bg-gray-800 rounded-lg flex justify-center items-center flex-col shadow-xl w-96">
        <p className="mb-8 text-4xl uppercase text-white">Inicio de sesión</p>
        {/* Input para el correo electrónico */}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo"
          className="mb-5 p-4 w-full border rounded-lg border-gray-700 bg-gray-700 text-white"
          required
        />
        {/* Input para la contraseña */}
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="mb-5 p-4 w-full border rounded-lg border-gray-700 bg-gray-700 text-white"
          required
        />
        {/* Botón de inicio de sesión */}
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Iniciar Sesión
        </button>
        <br />
        {/* Enlace para registro */}
        <div className="mt-6">
          <label htmlFor="no-tienes-cuenta" className="text-gray-400">¿No tienes cuenta? </label>
          <Link to="/registro" className="text-blue-500">
            <span><strong>Regístrate</strong></span>
          </Link>
        </div>
        <br />
        {/* Enlace para retornar a Home */}
        <div className="mt-4">
          <Link to="/" className="text-gray-400">
            <span><strong>Retornar a Home</strong></span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
