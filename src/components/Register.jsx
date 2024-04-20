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
      // Aquí podrías agregar validaciones adicionales para el usuario y la contraseña
      localStorage.setItem('user', JSON.stringify(newUser));
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Ahora puedes iniciar sesión con tus credenciales.',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login'); // Redirige al usuario a la página de inicio de sesión después del registro
        }
      });
    };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
        <p className="mb-5 text-3xl uppercase text-gray-600">Registro</p>
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
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
