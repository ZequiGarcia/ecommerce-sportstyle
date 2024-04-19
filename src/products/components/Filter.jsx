import React from "react";
import { useAllProduct, } from "../../hooks";

export const Filter =  ({ onFilter, onReset })  => {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <button className="btn btn-lg btn-outline" onClick={handleResetClick}>Todas</button>
                {Array.from(categoriasUnicas).map((categoria, index) => (
                    <button key={index} className="btn btn-lg btn-outline" onClick={() => handleFilterClick(categoria)}>
                        {categoria}
                    </button>
                ))}
            </div>
        </div>
    );
};
