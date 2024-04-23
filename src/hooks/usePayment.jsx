import { useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useCartPage } from './useCartPage';

export const usePayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const {setCart} = useCartPage();

  const handlePayment = () => {
    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const cvvRegex = /^[0-9]{3}$/;
  
    if (!cardNumber.trim() || !cardHolder.trim() || !expiryDate.trim() || !cvv.trim()) {
      toast.error('Por favor complete todos los campos antes de realizar el pago.', { position: "bottom-right" });
      return;
    }
  
    if (!expiryRegex.test(expiryDate)) {
      toast.error('Por favor ingrese la fecha de vencimiento en formato MM/YY.', { position: "bottom-right" });
      return;
    }
  
    if (!cvvRegex.test(cvv)) {
      toast.error('Por favor ingrese un CVV válido de 3 dígitos.', { position: "bottom-right" });
      return;
    }
  
    // Si todas las validaciones son exitosas, mostrar un mensaje de éxito
    toast.success('Pago realizado con éxito!.', { position: "bottom-right" });
  
    // Limpiar el carrito
    localStorage.removeItem('cart');
  
    // Cerrar el modal
    const modal = document.getElementById('my_modal_3');
    modal.close();
    window.location.reload(); // Recargar la página
  };
  

  const handleExpiryDateChange = (e) => {
    let value = e.target.value;
    // Si la longitud de la cadena es 2 y el último carácter no es "/", agregue "/" al final
    if (value.length === 2 && value.charAt(1) !== "/") {
      value += "/";
    }
    setExpiryDate(value);
  };

  return {
    cardNumber,
    cardHolder,
    cvv,
    expiryDate,
    setCardHolder,
    setCardNumber,
    setCvv,
    setExpiryDate,
    handlePayment,
    handleExpiryDateChange,
  };
};
