import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts]= useState([])
    const [cart, SetCart] = useState([])
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    const handlerAddToCart = (product) =>{
        // console.log(product)
        const newCart = [...cart, product]
        SetCart(newCart)
    }
   
    return (
        <div className='shop-container'>
            <div className='products-container'>
              {
                  products.map(product => <Product
                     key= {product.id} 
                     product = {product}
                     handlerAddToCart = {handlerAddToCart }
                     ></Product>)
              }
            </div>
            <div className='container'>
                <h3>Choosing Item</h3>
                <p>Item:  {cart.length} </p>
                <div className='btn-info'>
                <button>Choose 1 For Me</button>
                <button>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Products;