import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts]= useState([])
    const [cart, SetCart] = useState([])
    const [random, setRandom] = useState({})
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
    const randomChoose = () => {
    
        const random = Math.floor(Math.random()* cart.length  )
        setRandom(cart[random])
    }
     const chooseAgain = () =>{
        SetCart([])
        setRandom({})
     }
   
    return (
        <div className='shop-container'>
            <div className='products-container'>
              {
                  products.map((product,idx) => <Product
                     product = {product}
                     key= {idx} 
                     handlerAddToCart = {handlerAddToCart }
                     ></Product>)
              }
            </div>
            <div className='container'>
                <h1 className='Choose-item'>Choosing Item</h1>
                {/* <p>Item:  {cart.length} </p> */}
                { 
                   cart.map((item,idx) => <Cart key = {idx}  item=  {item} ></Cart>)
                }

                <div className='btn-info'>
                <button className='btn-style' onClick={randomChoose}>Choose 1 For Me</button> <br /> <br />
                <button className='btn-style' onClick= {chooseAgain} >Choose Again</button>
                <p>  {random.name} </p>
                </div>
            </div>
        </div>
    );
};

export default Products;