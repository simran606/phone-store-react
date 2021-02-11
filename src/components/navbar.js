import React, { Component } from 'react';
import { Button, Nav, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

export default class Navbar extends Component {
    render() {
        return (
    
              <Nav className="navbar">
                <NavbarBrand>
                  <Link to="/">
                    <img src="../../android-icon-3073.png" alt="brand-nav" />
                    <Nav.Link>Products</Nav.Link>
                  </Link>
                </NavbarBrand>
                  <Link to="/cart">
                    <Button variant="outline-primary" ><i className="fa fa-shopping-cart" aria-hidden="true"></i> My Cart</Button>
                  </Link>               
              </Nav>
           
            
        )
    }
}
