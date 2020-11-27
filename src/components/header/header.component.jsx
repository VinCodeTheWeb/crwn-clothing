import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { setCurrentUser } from '../../redux/user/user.actions';

import './header.styles.scss';

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);

  const disconnect = async () => {
    await auth.signOut()
    dispatch(setCurrentUser(null))
  };
  
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
      </div>
    </div>
  )
}

export default Header;
