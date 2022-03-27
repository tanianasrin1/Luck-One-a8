import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name, img} = props.item
    return (
        <div className='cart-img'>
            <img  src= {img} alt="" />
            <p className='item-text'> {name} </p>
        </div>
    );
};

export default Cart;
