import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name, img} = props.item
    return (
        <div className='cart-img'>
            <p> {name} </p>
            <img  src= {img} alt="" />
        </div>
    );
};

export default Cart;
