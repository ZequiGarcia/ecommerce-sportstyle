import React, { useState } from 'react';

export const Pago = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [ccv, setCcv] = useState('');

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleCardNameChange = (e) => {
        setCardName(e.target.value);
    };

    const handleExpiryChange = (e) => {
        setExpiry(e.target.value);
    };

    const handleCcvChange = (e) => {
        setCcv(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para procesar el pago
        console.log('Procesando pago...');
        // Cerrar el modal después de procesar el pago
        document.getElementById('modal').close();
    };

    

    return (
        <div>
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
            <div id="modal" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                        <div>
                            <label htmlFor="cardNumber" className="block text-gray-700">Número de tarjeta</label>
                            <input
                                type="text"
                                id="cardNumber"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                className="input input-bordered"
                                placeholder="XXXX XXXX XXXX XXXX"
                                maxLength="19"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="cardName" className="block text-gray-700">Nombre del titular</label>
                            <input
                                type="text"
                                id="cardName"
                                value={cardName}
                                onChange={handleCardNameChange}
                                className="input input-bordered"
                                placeholder="Nombre del titular"
                                required
                            />
                        </div>
                        <div className="flex">
                            <div className="w-1/2 mr-2">
                                <label htmlFor="expiry" className="block text-gray-700">Expiración (MM/YY)</label>
                                <input
                                    type="text"
                                    id="expiry"
                                    value={expiry}
                                    onChange={handleExpiryChange}
                                    className="input input-bordered"
                                    placeholder="MM/YY"
                                    maxLength="5"
                                    required
                                />
                            </div>
                            <div className="w-1/2 ml-2">
                                <label htmlFor="ccv" className="block text-gray-700">CCV</label>
                                <input
                                    type="text"
                                    id="ccv"
                                    value={ccv}
                                    onChange={handleCcvChange}
                                    className="input input-bordered"
                                    placeholder="CCV"
                                    maxLength="3"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Pagar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
