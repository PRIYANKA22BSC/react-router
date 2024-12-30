import React from 'react'
import { useState } from 'react'
import './App.css'
import Products from './products.jsx'
import Cart from './cart.jsx'

export default function Shop(){

    const [cartItems, setCartItems] = useState([]);
  function addToCart(item) {
    setCartItems((prevItems) => {
      return[...prevItems, { ...item, qty: 1}];
    });
  }

     // Function to handle quantity increase
     let  increaseQty = (itemId) => {
      setCartItems(cartItems.map(item => 
        item.id === itemId ? { ...item, qty: item.qty + 1  } : item
      ));
    };
  
    // Function to handle quantity decrease
    let decreaseQty = (itemId) => {
      setCartItems(cartItems
        .map(item => 
          item.id === itemId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0) 
      );
    };
    
    let items=[
        {id:'1',name:'Knee-Hi',price:'400',img:'image/1.jpg'},
        {id:'2',name:'Casual Sneakers',price:'399',img:'image/2.jpg'},
        {id:'3',name:'Loafers For Men',price:'450',img:'image/3.jpg'},
        {id:'4',name:'Stylish Casual',price:'350',img:'image/4.jpg'},
        {id:'5',name:'Sneakers For Women',price:'450',img:'image/5.jpg'},
        {id:'6',name:'Running Shoes',price:'550',img:'image/6.jpg'},
        {id:'7',name:'Sports shoes',price:'599',img:'image/7.jpg'},
        {id:'8',name:'Trending Stylish Casual',price:'450',img:'image/8.jpg'},
        {id:'9',name:'Walking Shoes',price:'500',img:'image/9.jpg'}
      ];
    
    return(
        <>
        <div id="components-container">
     <Products items={items} addToCart={addToCart}/>
     <Cart cartItems={cartItems} increaseQty={ increaseQty} decreaseQty={ decreaseQty}/>
     </div>
       </>
    )
}