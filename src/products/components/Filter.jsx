import React from "react";
import { useAllProduct, useFilter } from "../../hooks";

export const Filter = () => {
    const { productos } = useAllProduct();
    const { filtrarProductosPorCategoria } = useFilter();

    const categoriasUnicas = new Set();
    productos.forEach((product) => {
        categoriasUnicas.add(product.category);
    });

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from(categoriasUnicas).map((categoria, index) => (
                    <button key={index} className="btn btn-lg btn-outline" onClick={() => filtrarProductosPorCategoria(categoria)}>
                        {categoria}
                    </button>
                ))}
            </div>
        </div>
    );
};
