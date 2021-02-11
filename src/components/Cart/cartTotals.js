import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PayPalButton from './paypalButton';

export default function CartTotals({value, history}) {

    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
       <React.Fragment>
           <div className="container cartTotals-div">
             <Link to="/cart">
                 <Button className="margin-two" variant="outline-danger" onClick={() => clearCart()}>
                 Clear Cart
                 </Button>
             </Link>
             <h5 className="margin-two">SubTotal: <strong>${cartSubTotal}</strong></h5>
             <h5 className="margin-two">Tax: <strong>${cartTax}</strong></h5>
             <h5 className="margin-two">CartTotal: <strong>${cartTotal}</strong></h5>
             <PayPalButton  total={cartTotal} clearCart={clearCart} history={history} />
           </div>
       </React.Fragment>
    )
}
