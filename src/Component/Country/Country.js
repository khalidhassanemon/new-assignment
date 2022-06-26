import React, { useState } from 'react';
import fakeData from '../../fakeData/data.json';
import Data from '../Data/Data';
import Cart from '../Cart/Cart';
import './Country.css';
const Shop = () => {
  
     const firstFive=fakeData.slice(0,5);
     const [country,setCountry]=useState(firstFive);

    const [cart,setCart]=useState([]);
      
     const handleAddProduct=(name) => {
        console.log('Data addeded',name);
        const newCart=[...cart,name];
        setCart(newCart);
     }
    return (
        <div className="country-container">
             <div className="description-container">
              
                {
                    country.map(contry=><Data handleAddProduct={handleAddProduct} data={contry}></Data>)
                }
              </div>
              
              <div className="cart-container">
                <Cart cart={cart}></Cart>
              </div>
        </div>
    );
};

export default Shop;




