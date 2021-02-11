import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import '../css/details.css';
import { Link } from 'react-router-dom';
// import detailProduct from '../data';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,title,company,img,info,price,inCart} = value.detailProduct;
                    
                    return(
                        <div className="container detail-div">
                         <h1>{title}</h1>

                           <div className="row">

                               <div className="col-lg-6">
                                   <img src={img} alt="detail-img" /> 
                               </div>

                               <div className="col-lg-6 column-two">
                                   <h2>Model: {title}</h2>
                                   <h4 className="company-text">Made By: {company}</h4>
                                   <h4><strong>Price: $ {price}</strong></h4>
                                   <p><strong>Some Info About the Product: </strong></p>
                                   <p>{info}</p>
                                   <div>
                                       <Link to="/">
                                           <Button variant="outline-primary">Back To Products</Button>
                                       </Link>
                                       <Link to="" >
                                       <Button className="addtocart-btn"
                                       variant="outline-warning" 
                                       disabled={inCart ? true : false } 
                                       onClick={() => {
                                           value.addToCart(id);
                                           value.openModal(id);
                                       }} >
                                           {inCart ? "In Cart" : "Add To Cart" }
                                       </Button>
                                       </Link>

                                   </div>
                               </div>

                           </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
