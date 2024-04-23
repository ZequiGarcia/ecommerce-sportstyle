import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export function useRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { email, password };
  
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

  return {
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
  }
}