import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    let total=0;
    for(let i=0;i<cart.length;i++) {
        const product=cart[i];
        total=Math.round(total+product.price);
    }
    let shipping=0;
    if(total>35){
       shipping=0;
    }
    else if(total>15 && total<35){
      shipping=4.99;
    }
    else if(total>0&& total<15){
      shipping=12.99;
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <h4>Items Ordered:{cart.length}</h4>
            <p>product Price:{total}</p>
            <p><small>shipping cost:{shipping}</small></p>
       
        </div>
    );
};

export default Cart;