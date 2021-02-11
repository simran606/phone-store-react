import React, { Component } from 'react';
import '../css/productlist.css';
import Product from './product';
import Title from './title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
               <div className="container productlist-div" >
                 <Title name="Our" title="Products"></Title>

                <div className="row">
                  <ProductConsumer>
                      {value => {
                           return value.products.map(product => {
                               return <Product product={product} key={product.id} />
                           })
                      }}
                  </ProductConsumer>
                </div> 
               </div>
            </React.Fragment>
            
        )
    }
}
