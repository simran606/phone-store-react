import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CartTotals({value}) {

    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
       <React.Fragment>
           <div className="container cartTotals-div">
             <Link to="/cart">
                 <Button variant="outline-danger" onClick={() => clearCart()}>
                 Clear Cart
                 </Button>
             </Link>
             <h5>SubTotal: <strong>${cartSubTotal}</strong></h5>
             <h5>Tax: <strong>${cartTax}</strong></h5>
             <h5>CartTotal: <strong>${cartTotal}</strong></h5>
           </div>
       </React.Fragment>
    )
}
