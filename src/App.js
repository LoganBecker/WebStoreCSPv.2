import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import Pop from './components/Pop';
import LoginPage from './components/Login/LoginPage';

function App() {
  return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route path="/details" component={ Details } />
          <Route path="/cart" component={ Cart } />
          <Route component={ Default } />
        </Switch>

        <Pop />

      </React.Fragment>

  );
}

export default App;
