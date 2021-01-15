import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component.jsx';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

const App = () => {
  const dispatch = useDispatch();
  const { currentUser, collectionArray } = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
      collectionArray: selectCollectionsForPreview,
    })
  );

  useEffect(() => {
    dispatch(checkUserSession());
  }, [checkUserSession]);

  return (
    <Router>
      <GlobalStyle />
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() => (currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />)}
          />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
