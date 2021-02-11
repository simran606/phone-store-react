import React, { Component } from 'react';
import Title from '../title';
import CartColumns from './cartColumns';
import EmptyCart from './emptyCart';
import { ProductConsumer } from '../../context';
import CartList from './cartlist';
import CartTotals from './cartTotals';

export default class Cart extends Component {
    render() {
        return (
            <div>
            <ProductConsumer>
            {value => {
                const {cart} = value;
                if(cart.length > 0){
                    return(
                        <React.Fragment>
                          <Title name="Your" title="Cart" />
                          <CartColumns />
                          <CartList value={value} />
                          <CartTotals value={value} />
                        </React.Fragment>
                    );   
                }
                else{
                    return <EmptyCart />;
                }
            }}
 
            </ProductConsumer>
              
            </div>
        )
    }
}
