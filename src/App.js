import React, { Component } from 'react'
import {Switch , Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/productlist';
import Details from './components/details';
import Cart from './components/Cart/cart';
import Default from './components/default';
import Navbar from './components/navbar';
import Modal from './components/modal';

export default class App extends Component {

  render() {
    return (

     <React.Fragment>

     <Navbar />

      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route component={Default} />
      </Switch>

      <Modal />

     </React.Fragment>
    );
  }
}