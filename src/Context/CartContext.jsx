import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prevItems) => [...prevItems, product]);
  }

  function removeFromCart(productId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
