import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ( {product,handlerAddToCart} ) => {
    const {name,img, price, id } = product
    return (
        <div className='product'>
            <img src= {img} alt="" />
            <div className='product-info'>
               <p className='product-name'> {name} </p>
               <p>Price: ${price} </p>
               <p>Id: {id} </p>
            </div>
            <button onClick={() => handlerAddToCart(product) } className='btn-cart'>
               <small className='btn-text'> Add to Cart</small>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>

        </div>
    );
};

export default Product;