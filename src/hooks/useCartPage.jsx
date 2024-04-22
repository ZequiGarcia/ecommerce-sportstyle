// CartPage.jsx
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useCartPage = () => {
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

  return {
    cart,
    removeFromCart,
    total,
    
  }
};

