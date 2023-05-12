import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] });

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartUnits = cart.map(prod => prod.quantity);
  const cartTotal = cartUnits.reduce((acumulador, elemento) => acumulador + elemento, 0);

  const cartPrices = cart.map(prod => prod.price);
  const cartValue = cartPrices.reduce((acumulador, elemento) => acumulador + elemento, 0);

  const isInCart = (id) => {
    const state = cart.some(prod => prod.id === id);
    return state;
  };

  const addToCart = (id, name, price, quantity, img) => {
    const state = isInCart(id);
    state ? (console.log('El producto ya esta agregado')) : (setCart(prod => [...prod, { id, name, price, quantity, img }]));
  };

  const removeFromCart = (id) => {
    const cartUpdated = cart.filter(prod => prod.id !== id);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, cartTotal, cartValue, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;