import React from "react";
import { useCartPage } from "../../hooks";

export const Product = ({ productos }) => {

    const {addToCart} = useCartPage();
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {productos.map((product) => (
                    <div key={product.id} className="col-span-1">
                        <div className="card bg-base-100 shadow-xl h-full">
                            <figure style={{ paddingTop: '100%' }} className="relative">
                                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                            </figure>
                        <div className="card-body">
                            <div className="badge badge-info"><b>${product.price}</b></div>
                            <h2 className="card-title">{product.name}</h2>
                            <p className="overflow-y-auto h-50">{product.description}</p> {/* Establecer altura máxima y desbordamiento */}
                            <div className="card-actions content-center">
                            <button className="btn btn-info ml-2 btn-outline" onClick={() => addToCart(product)}>Agregar al Carrito <i className="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>

    );
};
