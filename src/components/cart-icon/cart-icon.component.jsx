import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingICon } from '../../assets/shopping-bag.svg'

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const dispatch = useDispatch();

  const { itemCount } = useSelector(createStructuredSelector({
    itemCount: selectCartItemsCount
  }))

  const toggleCart = () => dispatch(toggleCartHidden());


  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingICon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}


export default CartIcon;