import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import Header from './components/header/header.component';

const App = () => (
  <Router>
    <>
      <Header /> 
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </>
  </Router>
)

export default App;
