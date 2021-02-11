import React from 'react';
import { Button } from 'react-bootstrap';

export default function CartItem({item,value}) {

    const {id,title,img,price,total,count} = item;
    const {increment,decrement,removeItem} = value;

    return (
        <div className="row cartItem-div" >

            <div className="col-lg-2">
                <img src={img} alt="product-img" />
            </div>

            <div className="col-lg-2 margin-two">
                <span className="d-lg-none">Product: </span>
                <strong>{title}</strong>
            </div>

            <div className="col-lg-2 margin-two">
                <span className="d-lg-none">Price: </span>
                ${price}
            </div>

            <div className="col-lg-2 margin-two">
                <Button variant="outline-dark" onClick={() => decrement(id)}>-</Button>
                <Button variant="outline-dark">{count}</Button>
                <Button variant="outline-dark" onClick={() => increment(id)}>+</Button>
            </div>

            <div className="col-lg-2 margin-two">
                <div className="trash-icon" onClick={() => removeItem(id)}>
                <i className="fa fa-trash" />
                </div>
            </div>

            <div className="col-lg-2 margin-two">
            <strong><span className="d-lg-none">Total: </span>
            ${total}
            </strong>

            </div>

            <hr />

        </div>
    )
}
