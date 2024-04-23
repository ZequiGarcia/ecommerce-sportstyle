import React from 'react';
import { usePayment } from '../../hooks';

export const Payment = () => {

    const { cardNumber, cardHolder, cvv, expiryDate, setCardHolder,setCardNumber,setCvv, setExpiryDate, handlePayment } = usePayment();
  return (
    <>
      <button className="btn btn-info" onClick={() => document.getElementById('my_modal_3').showModal()}>Pagar</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box flex flex-col items-center">
          <form method="dialog justify-center">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg mt-4">Pago!</h3>
          <div className="form-control mt-2 w-full max-w-xs">
            <label htmlFor="card-number">Número de tarjeta</label>
            <input
              type="text"
              id="card-number"
              placeholder="Ingrese el número de tarjeta"
              className="input input-bordered input-accent w-full max-w-xs text-center"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>

          <div className="form-control mt-2 w-full max-w-xs">
            <label htmlFor="card-holder">Nombre del titular de la tarjeta</label>
            <input
              type="text"
              id="card-holder"
              placeholder="Ingrese el nombre del titular de la tarjeta"
              className="input input-bordered input-accent w-full max-w-xs text-center"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />
          </div>

          <div className="form-control mt-2 w-full max-w-xs">
            <label htmlFor="expiry-date">Fecha de vencimiento (MM/YY)</label>
            <input
              type="text"
              id="expiry-date"
              placeholder="MM/YY"
              className="input input-bordered input-accent w-full max-w-xs text-center"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>

          <div className="form-control mt-2 w-full max-w-xs">
            <label htmlFor="cvv">CVV (3 dígitos)</label>
            <input
              type="text"
              id="cvv"
              placeholder="Ingrese CVV"
              className="input input-bordered input-accent w-full max-w-xs text-center"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>

          <div className="form-control mt-5 w-full max-w-xs">
            <button className="btn btn-primary" onClick={handlePayment}>Pagar ahora</button>
          </div>
        </div>
      </dialog>
    </>
  )
};
