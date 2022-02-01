import React, { useEffect, useState } from "react";
import {PaymentElement,useStripe,useElements}from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Pago realizado!");
          break;
        case "processing":
          setMessage("Procesando su pago.");
          break;
        case "requires_payment_method":
          setMessage("Tu pago no se pudo completar,intentelo otra vez.");
          break;
        default:
          setMessage("Algo salio mal");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
  
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
    
        return_url: "http://localhost:3000",
      },
    });

 
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("Ocurrio un error inesperado");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="Medialunas" id="1"></div> : "Comprar ahora"}
        </span>
      </button>
     
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}