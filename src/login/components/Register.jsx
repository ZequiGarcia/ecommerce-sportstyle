import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRegister } from '../../hooks';

export function Register() {
    const { user, setUser, password, setPassword, handleSubmit } = useRegister();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <form onSubmit={handleSubmit} className="p-10 bg-gray-800 rounded-lg flex justify-center items-center flex-col shadow-xl w-96">
                <p className="mb-8 text-4xl uppercase text-white">Registro</p>
                <input
                    type="text"
                    name="user"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Correo"
                    className="mb-5 p-4 w-full border rounded-lg border-gray-700 bg-gray-700 text-white"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    className="mb-5 p-4 w-full border rounded-lg border-gray-700 bg-gray-700 text-white"
                    required
                />
                <button type="submit" className="w-full bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                    Registrarse
                </button>
                <br />
                <div className="mt-6">
                    <label htmlFor="ya-tienes-cuenta" className="text-gray-400">¿Ya tienes una cuenta? </label>
                    <Link to="/Login" className="text-blue-500">
                        <span><strong>Inicia sesión</strong></span>
                    </Link>
                </div>
                <br />
                <div className="mt-4">
                    <Link to="/" className="text-gray-400">
                        <span><strong>Retornar a Home</strong></span>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Register;