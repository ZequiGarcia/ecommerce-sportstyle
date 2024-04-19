import React, { useState } from 'react';
import { useAllProduct, useFilter } from '../../hooks';
import {Filter, Header, Product } from '../components';

export const ProductPage = () => {
    const { productos } = useAllProduct(); 
    const { filteredProducts, filtrarProductosPorCategoria } = useFilter(); 
    const [filtered, setFiltered] = useState(false);

    const handleFilter = (categoria) => {
        filtrarProductosPorCategoria(categoria); 
        setFiltered(true);
        console.log(filteredProducts);
    };

    // Esta función se encargará de restablecer el filtro
    const handleResetFilter = () => {
        filtrarProductosPorCategoria(''); 
        setFiltered(false);
    console.log(filteredProducts);
    };

    return (
        <>
        <Header />
            <Filter onFilter={handleFilter} onReset={handleResetFilter} />
            <Product productos={filtered ? filteredProducts : productos} /> {/* Pasamos los productos filtrados si se aplicó un filtro, de lo contrario, pasamos todos los productos */}
        </>
    );
};
