import React, { Component } from 'react';
import '../css/modal.css';
import {ProductConsumer} from '../context'; 
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
              {(value) => {
                  const {modalOpen, closeModal}  = value;
                  const {img,title,price} = value.modalProduct;
                  if(!modalOpen){
                      return null;
                  }
                  else{
                    return(
                      <div className="modal-div">
                      <div className="container mod-div">
                               <h1>Item added to the cart</h1>
                               <img src={img} alt="item-pic" className="item-img" />
                               <h5><strong>{title}</strong></h5>
                               <h5>Price: ${price}</h5>
                               <Link to="/">
                                   <Button className="continueshopping-btn" variant="outline-primary" onClick={() => closeModal()} >
                                     Continue Shopping
                                   </Button>
                               </Link>
                               <Link to="/cart">
                                   <Button className="gotocart-btn" variant="outline-warning" onClick={() => closeModal()} >
                                     Go To Cart
                                   </Button>
                               </Link>
                      </div>
                      </div>
                      );
                 } 
              }}
            </ProductConsumer>            
        )
    }
}
