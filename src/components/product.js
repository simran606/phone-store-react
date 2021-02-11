import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {

        const {id,title, img, price, inCart} = this.props.product;

        return (
            <div className="col-lg-4 product-div" >
              <div className="card">
                 
                <ProductConsumer>

                {(value) => (
                    <div className="img-container" 
                    onClick={() => 
                       value.handleDetail(id)
                    } >

                        <Link to="/details">
                            <img src={img} alt="product-img" className="product-img" />
                        </Link>

                        <Button className="cart-btn" 
                           variant="outline-dark" 
                           disabled={inCart ? true : false} 
                           onClick={() => { 
                           value.addToCart(id);
                           value.openModal(id);
                           }
                           } >
                          {inCart ? (<p className="InCart-text" disabled>In Cart</p>) : (<i className="fa fa-shopping-cart" aria-hidden="true"></i>) }
                        </Button>
                    </div>
                )}

                </ProductConsumer>

                  <div className="card-footer">
                    <h5>{title}</h5><h6>${price}</h6>
                  </div>
              </div>
            </div>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}
