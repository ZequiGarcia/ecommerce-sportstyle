
export const Payment = () =>{
    return(
        <>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Pagar</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog justify-center">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Pago!</h3>
        <div class="form-control">
            <label for="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="Enter card number" class="input input-bordered input-accent w-full max-w-xs" />
        </div>

        <div class="form-control">
            <label for="card-holder">Cardholder Name</label>
            <input type="text" id="card-holder" placeholder="Enter cardholder name" class="input input-bordered input-accent w-full max-w-xs" />
        </div>

        <div class="form-control">
            <label for="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" placeholder="MM/YY" class="input input-bordered input-accent w-full max-w-xs" />
        </div>
        <div class="form-control"> 
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="Enter CVV" class="input input-bordered input-accent w-full max-w-xs" />
        </div>
        <div class="form-control mt-5">
            <button class="btn btn-primary">Pay Now</button>
        </div>
  </div>
</dialog></>
    )
}