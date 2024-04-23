import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const useLogin = ({ setAuth }) => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const registeredCorreo = JSON.parse(localStorage.getItem('user'));
  
      if (registeredCorreo && registeredCorreo.correo === correo && registeredCorreo.password === password) {
        setAuth(true);
        navigate('/'); 
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Correo o contraseña incorrectos, por favor intenta de nuevo.',
        });
      }
    };

    return {
        correo,
        setCorreo,
        password,
        setPassword,
        handleSubmit,

    }
}