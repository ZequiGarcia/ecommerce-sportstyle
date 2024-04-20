import React from "react";

import { toast } from 'react-toastify';

const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let found = cart.find(item => item.id === product.id);
    if (found) {
        found.quantity += 1;
        toast.success(`Producto ${product.name} agregado al carrito.`, { position: "bottom-right" });
    } else {
        cart.push({...product, quantity: 1});
        toast.success(`${product.name} agregado al carrito.`, { position: "bottom-right" });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
};


export const Product = ({ productos }) => {
    return (
        <div className="container mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {productos.map((product) => (
                    <div key={product.id} className="col-span-1">
                        <div className="card bg-base-100 shadow-xl">
                            <figure style={{ paddingTop: '100%' }} className="relative">
                                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                            </figure>
                            
                            <div className="card-body">
                                <div className="badge badge-secondary">${product.price}</div>
                                <h2 className="card-title">{product.name}</h2>
                                <p>{product.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Buy Now</button>
                                    <button className="btn btn-secondary ml-2" onClick={() => addToCart(product)}>Agregar al Carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
