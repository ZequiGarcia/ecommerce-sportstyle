import React from "react";
import { useAllProduct } from "../../hooks";

export const Filter = ({ onFilter, onReset }) => {
  const { productos } = useAllProduct();

  const categoriasUnicas = new Set();
  productos.forEach((product) => {
    categoriasUnicas.add(product.category);
  });

  const handleFilterClick = (categoria) => {
    onFilter(categoria);
  };

  const handleResetClick = () => {
    onReset();
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 " style={{ marginTop: "2%", marginBottom: "2%" }}>
        {/* Botón de radio para "Todos" */}
        <label className="inline-flex items-center space-x-1">
          <input
            type="radio"
            name="radio-4"
            className="radio radio-info"
            onClick={handleResetClick} // Maneja el clic en "Todos"
          />
          <span>Todos</span>
        </label>

        {/* Botones de radio para las categorías únicas */}
        {Array.from(categoriasUnicas).map((categoria, index) => (
          <label key={index} className="inline-flex items-center space-x-1">
            <input
              type="radio"
              name="radio-4"
              className="radio radio-info"
              id={`categoria-${index}`}
              onClick={() => handleFilterClick(categoria)}
            />
            <span>{categoria}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
