import React from "react";

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
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
