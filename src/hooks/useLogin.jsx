import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const useLogin = ({ setAuth }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const registeredUser = JSON.parse(localStorage.getItem('user'));
  
      if (registeredUser && registeredUser.user === user && registeredUser.password === password) {
        setAuth(true);
        navigate('/'); 
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contraseña incorrectos, por favor intenta de nuevo.',
        });
      }
    };

    return {
        user,
        setUser,
        password,
        setPassword,
        handleSubmit,

    }
}