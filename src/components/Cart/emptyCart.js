import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function EmptyCart(){
    return(
        <div className="container emptyCart-div">
            <h1>Your Cart Is Currently Empty</h1>
            <img src="../../../img/sad-ghost.gif" alt="ghost" />
            <Link to="/">
                <Button className="continueshopping-btn" variant="outline-primary" >
                  Continue Shopping
                </Button>
            </Link>
        </div>
    );
}
