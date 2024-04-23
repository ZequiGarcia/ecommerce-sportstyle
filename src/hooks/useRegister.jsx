import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export function useRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el correo electrónico
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Correo electrónico inválido',
        text: 'Por favor, introduce un correo electrónico válido.',
      });
      return;
    }

    // Validar la contraseña
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña inválida',
        text: 'La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra y un número.',
      });
      return;
    }

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
  };
}
