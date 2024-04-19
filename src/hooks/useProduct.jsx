import { useEffect, useState } from "react";
import productData from '../mocks/product.json'


export function useAllProduct(){
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Simular la carga de datos desde el archivo JSON
        setProductos(productData.productos);
    }, []);

    return{
        productos,
    }
}
