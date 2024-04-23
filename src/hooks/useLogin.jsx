import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const useLogin = ({ setAuth }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const registeredUser = JSON.parse(localStorage.getItem('user'));
  
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
  
      if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
        setAuth(true);
        navigate('/');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Correo electrónico o contraseña incorrectos, por favor intenta de nuevo.',
        });
      }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
    };
}
