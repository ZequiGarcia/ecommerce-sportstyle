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
      updateTotal(storedCart);
    }
  };

  const updateTotal = (cart) => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(subtotal);
  };

  const addToCart = (product) => {
    const user = localStorage.getItem('user');
    if (user === null) {
      toast.error('Debes iniciar sesión para agregar productos al carrito.', { position: "bottom-right" });
      return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let found = cart.find(item => item.id === product.id);

    if (found) {
      found.quantity += 1;
      toast.success(`Cantidad actualizada de ${product.name} en el carrito.`, { position: "bottom-right" });
    } else {
      cart.push({ ...product, quantity: 1 });
      toast.success(`${product.name} agregado al carrito.`, { position: "bottom-right" });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setCart(cart); // Actualizar el estado del carrito en el componente
    updateTotal(cart); // Actualizar el total
    window.dispatchEvent(new CustomEvent('cartUpdated')); // Disparar evento de actualización
  };

  const removeFromCart = (indexToRemove) => {
    let newCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    updateTotal(newCart); // Recalcular el total
    toast.info('Producto eliminado del carrito.', { position: "bottom-right" });
  };

  return {
    cart,
    removeFromCart,
    total,
    addToCart,
    setCart,
  };
};
