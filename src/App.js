import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const App = () => (
  <Router>
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </>
  </Router>
)

export default App;
