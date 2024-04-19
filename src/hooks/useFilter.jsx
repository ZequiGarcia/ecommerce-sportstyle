import { useEffect, useState } from "react";
import { useAllProduct } from "./useProduct";

export const useFilter = () => {
    const { productos } = useAllProduct();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoriasUnicas, setCategoriasUnicas] = useState(new Set());

    useEffect(() => {
        if (productos.length > 0) {
            // Calcular categorías únicas solo cuando los productos estén disponibles
            const uniqueCategories = new Set(productos.map(producto => producto.category));
            setCategoriasUnicas(uniqueCategories);
        }
    }, [productos]);

    const filtrarProductosPorCategoria = (categoria) => {
        // Filtrar los productos por la categoría proporcionada
        const productosFiltrados = productos.filter(producto => producto.category === categoria);
        // Establecer los productos filtrados en el estado
        setFilteredProducts(productosFiltrados);
        console.log("Productos filtrados:", productosFiltrados);
    };

    return {
        categoriasUnicas,
        filteredProducts,
        filtrarProductosPorCategoria,
    };
};
