import React from 'react';
import { useDispatch } from 'react-redux'

import { ReactComponent as ShoppingICon } from '../../assets/shopping-bag.svg'

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const dispatch = useDispatch();

  const toggleCart = () => dispatch(toggleCartHidden());

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingICon className='shopping-icon' />
      <span className='item-count'> 0 </span>
    </div>
  )
}


export default CartIcon;