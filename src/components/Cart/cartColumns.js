import React, { Component } from 'react';
import '../../css/cart.css';

export default class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid cartcolumn-div" >
                <div className="row">
                    <div className="col-lg-2">
                        <p>PRODUCTS</p>
                    </div>
                    <div className="col-lg-2">
                        <p>NAME OF THE PRODUCT</p>
                    </div>
                    <div className="col-lg-2">
                        <p>PRICE</p>
                    </div>
                    <div className="col-lg-2">
                        <p>QUANTITY</p>
                    </div>
                    <div className="col-lg-2">
                        <p>REMOVE</p>
                    </div>
                    <div className="col-lg-2">
                        <p>TOTAL</p>
                    </div>
                </div>
            </div>
        )
    }
}
