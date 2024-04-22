import React, { useState } from 'react';
import { useAllProduct, useFilter } from '../../hooks';
import { Filter, Header, Product } from '../components';
import Footer from '../components/Footer';

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
      <div className='container mx-auto px-4 sm:px-8 lg:px-12 my-4'>
        <Filter onFilter={handleFilter} onReset={handleResetFilter} />
        <br /><br />
        <Product productos={filtered ? filteredProducts : productos} />
      </div>
      <Footer />
    </>
  );
};
