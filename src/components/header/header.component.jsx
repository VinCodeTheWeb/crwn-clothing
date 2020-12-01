import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { setCurrentUser } from '../../redux/user/user.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser, hidden } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  }));
  

  const disconnect = async () => {
    await auth.signOut()
    dispatch(setCurrentUser(null))
  };

  console.log(hidden);
  
  return (
    <div className="header">
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className="options">
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        {
          currentUser ?
          <div className='option' onClick={disconnect}>SIGN OUT</div>
          :
          <Link className='option' to='/signin'>
            SIGNIN
          </Link>
        }
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        <CartIcon />
      </div>

      {!hidden && <CartDropdown />}
    </div>
  )
}

export default Header;
