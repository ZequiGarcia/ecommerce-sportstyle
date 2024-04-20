import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProductRouter } from './router/ProductRouter';
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
      <ProductRouter isAuth={isAuth} setAuth={setAuth} />
    </BrowserRouter>
  );
}

export default App;

