import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { setCurrentUser } from '../../redux/user/user.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from './header.styles';
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
  
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        {
          currentUser ?
          <OptionLink as='div' onClick={disconnect}>SIGN OUT</OptionLink>
          :
          <OptionLink to='/signin'>
            SIGNIN
          </OptionLink>
        }
        <OptionLink to='/contact'>
          CONTACT
        </OptionLink>
        <CartIcon />
      </OptionContainer>

      {!hidden && <CartDropdown />}
    </HeaderContainer>
  )
}

export default Header;
