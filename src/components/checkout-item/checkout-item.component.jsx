import React from 'react';
import { useDispatch } from 'react-redux';

import './checkout-item.styles.scss';

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const clearItem = () => dispatch(clearItemFromCart(cartItem));

  const decrease = () => dispatch(removeItem(cartItem));
  const increase = () => dispatch(addItem(cartItem));

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={decrease}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className="arrow" onClick={increase}>&#10095;</div>
      </span>
      <span className='price'>${price}</span>
      <div className="remove-button" onClick={clearItem}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;