import { useState } from "react";
import { useAllProduct } from "./product";


export const useFilter = () => {
    const { productos } = useAllProduct();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const filtrarProductosPorCategoria = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };

    // Filtrar productos por la categoría seleccionada
    const productosFiltrados = categoriaSeleccionada
        ? productos.filter(producto => producto.category === categoriaSeleccionada)
        : productos;

    // Calcular categorías únicas
    const categoriasUnicas = new Set();
    productos.forEach((product) => {
        categoriasUnicas.add(product.category);
    });

    return {
        filtrarProductosPorCategoria,
        productosFiltrados,
        categoriasUnicas // Devolver categorías únicas
    };
};
