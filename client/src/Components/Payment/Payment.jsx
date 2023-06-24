import React,{useEffect,useState} from 'react';
import styles from './Payment.module.css'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';

const Payment = ({TokenData}) => {
  console.log(TokenData)

    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
  
    useEffect(() => {
      fetch("http://localhost:5252/config").then(async (r) => {
        const { publishableKey } = await r.json();
        console.log(publishableKey)
        setStripePromise(loadStripe(publishableKey));
      });
    }, []);
  
    useEffect(() => {
      fetch("http://localhost:5252/create-payment-intent", {
        method: "POST",
        body: JSON.stringify({}),
      }).then(async (result) => {
        var { clientSecret } = await result.json();
        setClientSecret(clientSecret);
      });
    }, []);
    return (
        <div className='container'>
        <h1 className='text-center'>Donate To {TokenData.orgName} </h1>
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm/>
          </Elements>
        )}
      </div>
    );
}

export default Payment;
