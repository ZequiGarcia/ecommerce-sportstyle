// CartPage.jsx
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useCartPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = (product) => {
    
    const user = localStorage.getItem('user');


if (user === null) {
  // Si el usuario no está autenticado, mostrar un mensaje de error
  toast.error('Debes iniciar sesión para agregar productos al carrito.', { position: "bottom-right" });
  return;
}
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let found = cart.find(item => item.id === product.id);
    
    if (found) {
        found.quantity += 1;
        toast.success(`Cantidad actualizada de ${product.name} en el carrito.`, { position: "bottom-right" });
    } else {
        cart.push({...product, quantity: 1});
        toast.success(`${product.name} agregado al carrito.`, { position: "bottom-right" });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));

    // Disparar un evento personalizado para indicar que el carrito ha sido actualizado
    window.dispatchEvent(new CustomEvent('cartUpdated'));
};

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
    addToCart,
    
  }
};

