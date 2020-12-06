import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_Qft9zaqtZAuatkAi9NrSQHEI';

  const onToken = token => {
    console.log(token);
    alert('Payment Successfull!');
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishablekey}
      panelLabel='Pay Now'
      token={onToken}
      locale='fr' />
  )
}

export default StripeCheckoutButton