import  { useState } from 'react';


export const usePayment = () => {
    const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Expresión regular para validar el formato MM/YY
    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    // Expresión regular para validar el CVV de 3 dígitos
    const cvvRegex = /^[0-9]{3}$/;

    // Validar que los campos no estén vacíos
    if (!cardNumber.trim() || !cardHolder.trim() || !expiryDate.trim() || !cvv.trim()) {
      alert("Por favor complete todos los campos antes de realizar el pago.");
      return;
    }

    // Validar el formato de la fecha de vencimiento
    if (!expiryRegex.test(expiryDate)) {
      alert("Por favor ingrese la fecha de vencimiento en formato MM/YY.");
      return;
    }

    // Validar el formato del CVV
    if (!cvvRegex.test(cvv)) {
      alert("Por favor ingrese un CVV válido de 3 dígitos.");
      return;
    }

    // Si todas las validaciones son exitosas, mostrar un mensaje de éxito en la consola
    console.log("¡Pago realizado con éxito!");
  };

  return{
    cardNumber,
    cardHolder,
    cvv,
    expiryDate,
    setCardHolder,
    setCardNumber,
    setCvv,
    setExpiryDate,
    handlePayment,
  }
}