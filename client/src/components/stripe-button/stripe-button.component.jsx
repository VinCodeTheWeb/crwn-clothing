import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_Qft9zaqtZAuatkAi9NrSQHEI';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      }
    }).then(stripeRes => alert('Payment Successful!'))
      .catch(stripeErr => {
        console.log('Payment Error:', stripeErr)
        alert('Error with your credit card..')
      });
    
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