import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login({ setAuth }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredUser = JSON.parse(localStorage.getItem('user'));

    if (registeredUser && registeredUser.user === user && registeredUser.password === password) {
      setAuth(true);
      navigate('/'); // Redirige al usuario a la página principal después del inicio de sesión exitoso
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña incorrectos, por favor intenta de nuevo.',
      });
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
        <p className="mb-5 text-3xl uppercase text-gray-600">Inicio de sesión</p>
        <input
          type="text"
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Usuario"
          className="mb-5 p-3 w-80 border-2 border-gray-300"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="mb-5 p-3 w-80 border-2 border-gray-300"
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
