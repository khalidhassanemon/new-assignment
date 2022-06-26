import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Data.css';
const Data = (props) => {
//   console.log(props.data);
    const {name,image,price} = props.data;
    return (
        <div className='Country'>
            <div>
                <img src={image}></img>
            </div>
            <div>
            <h4>{name}</h4>
            <h4>Price:${price}</h4>
            <button onClick={()=>props.handleAddProduct(props.data)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Data;