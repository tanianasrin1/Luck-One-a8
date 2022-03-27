import React from 'react';
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
                Add to Cart
                </button>

        </div>
    );
};

export default Product;