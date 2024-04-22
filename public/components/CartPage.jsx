// CartPage.jsx
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
      let subtotal = storedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotal(subtotal);
    }
  };

  const removeFromCart = (indexToRemove) => {
    let newCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    loadCart(); // Recalcular el total después de eliminar el item
    toast.info('Producto eliminado del carrito.', { position: "bottom-right" });
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-5 text-center">Tu Carrito</h2>
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cart.map((product, index) => (
            <div key={index} className="card bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg p-4">
              <div className="flex flex-row items-center">
                <div className="flex-shrink-0">
                  <img src={product.image} alt={product.name} className="h-20 w-20 object-cover rounded-md" />
                </div>
                <div className="flex-grow ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600">Cantidad: {product.quantity}</p>
                  <p className="text-sm text-gray-600">Precio: ${product.price.toFixed(2)}</p>
                </div>
                <div className="flex-shrink-0">
                  <button className="btn btn-error btn-sm" onClick={() => removeFromCart(index)}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">Tu carrito está vacío.</div>
      )}
      <div className="flex justify-between items-center mt-6">
        <div className="text-lg font-bold">Total: ${total.toFixed(2)}</div>
        <button className="btn btn-primary">Proceder al Pago</button>
      </div>
    </div>
  );
};

export default CartPage;
