import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems,setCartItems]=useState([]);

  const addToCart=(items)=>{
    setCartCount(cartCount+1);
    setCartItems([...cartItems,items])
  }
  const removeFromCart=(itemId)=>{
    setCartCount(cartCount-1);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }
  return(
    <CartContext.Provider value={{cartCount,cartItems,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
};
