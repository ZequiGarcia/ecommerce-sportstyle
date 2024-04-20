import React, { useState } from 'react';
import { useAllProduct, useFilter } from '../../hooks';
import { Filter, Header, Product } from '../components';

export const ProductPage = ({ isAuth, setAuth }) => {
  const { productos } = useAllProduct(); 
  const { filteredProducts, filtrarProductosPorCategoria } = useFilter(); 
  const [filtered, setFiltered] = useState(false);

  const handleFilter = (categoria) => {
    filtrarProductosPorCategoria(categoria); 
    setFiltered(true);
  };

  const handleResetFilter = () => {
    filtrarProductosPorCategoria(''); 
    setFiltered(false);
  };

  return (
    <>
      <Header isAuth={isAuth} setAuth={setAuth} />
      <Filter onFilter={handleFilter} onReset={handleResetFilter} />
      <Product productos={filtered ? filteredProducts : productos} />
    </>
  );
};
