import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const useLogin = ({ setAuth }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const registeredUser = JSON.parse(localStorage.getItem('user'));
  
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
    }
}