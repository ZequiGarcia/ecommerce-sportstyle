import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Register() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { user, password };
  
    localStorage.setItem('user', JSON.stringify(newUser));
    Swal.fire({
      icon: 'success',
      title: '¡Registro exitoso!',
      text: 'Ahora puedes iniciar sesión con tus credenciales.',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login');
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="p-10 bg-gray-800 rounded-lg flex justify-center items-center flex-col shadow-xl">
        <p className="mb-5 text-3xl uppercase text-white">Registro</p>
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
        <button type="submit" className="w-full bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
