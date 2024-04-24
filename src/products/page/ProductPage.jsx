import React, { useState } from 'react';
import { useAllProduct, useFilter } from '../../hooks';
import { Filter, Header, Product } from '../components';
import Footer from '../components/Footer';

export const ProductPage = ({ isAuth, setAuth }) => {
  const { productos } = useAllProduct();
  const { filteredProducts, filtrarProductosPorCategoria } = useFilter();
  const [filtered, setFiltered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calcula el índice inicial y final de los productos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = (filtered ? filteredProducts : productos).slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calcula el número total de páginas
  const totalPages = Math.ceil(
    (filtered ? filteredProducts.length : productos.length) / itemsPerPage
  );

  const handleFilter = (categoria) => {
    filtrarProductosPorCategoria(categoria);
    setFiltered(true);
    setCurrentPage(1); // Resetear la página actual al aplicar el filtro
  };

  const handleResetFilter = () => {
    filtrarProductosPorCategoria("");
    setFiltered(false);
    setCurrentPage(1); // Resetear la página actual al eliminar el filtro
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Condición para mostrar la paginación
  const shouldShowPagination =
    (filtered ? filteredProducts.length : productos.length) > itemsPerPage;

  return (
    <>
      <Header isAuth={isAuth} setAuth={setAuth} />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 my-4">
        <Filter onFilter={handleFilter} onReset={handleResetFilter} />
        <br />
        <br />
        <Product productos={currentProducts} />

        {/* Renderiza la paginación solo si hay más de 8 productos */}
        {shouldShowPagination && (
          <div className="flex justify-center my-4">
            <nav className="inline-flex">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="mx-2 px-5 py-1 btn btn-primary ml-2 btn-outline"
              >
                Anterior
              </button>
              <span
                className="mx-2 px-5 py-1 btn btn-primary ml-2"
                style={{ pointerEvents: "none" }}
              >
                {currentPage}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="mx-2 px-5 py-1 btn btn-primary ml-2 btn-outline"
              >
                Siguiente
              </button>
            </nav>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};
