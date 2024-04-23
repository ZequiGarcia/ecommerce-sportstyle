import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProductRouter } from './router/ProductRouter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'


function App() {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setAuth(true);
    }
  }, []);

  return (

    <BrowserRouter>
    <ToastContainer />
      <ProductRouter isAuth={isAuth} setAuth={setAuth} />
    </BrowserRouter>
  );
}

export default App;

