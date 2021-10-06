import { createContext, useState } from "react";
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartWed, setCartWed] = useState([]);
  const [cartGather, setCartGather] = useState([]);

  const addToCart = (item, radioValue) => {
    if (radioValue === "Graduation") {
      setCart([...cart, item]);
    }

    if (radioValue === "Wedding") {
      setCartWed([...cartWed, item]);
    }

    if (radioValue === "Gathering") {
      setCartGather([...cartGather, item]);
    }
  };

  const removeFromCart = (item, type) => {
    if (type === "cart") {
      const newCart = cart.filter(
        (itemOnCart) => itemOnCart.name !== item.name
      );
      setCart(newCart);
    }

    if (type === "cartWed") {
      const newCartWed = cartWed.filter(
        (itemOnCart) => itemOnCart.name !== item.name
      );
      setCartWed(newCartWed);
    }

    if (type === "cartGather") {
      const newCartGather = cartGather.filter(
        (itemOnCart) => itemOnCart.name !== item.name
      );
      setCartGather(newCartGather);
    }
  };

  // console.log("cart de grad no provider cart", cart);
  // console.log("cart de wed no provider cart", cartWed);
  // console.log("cart de gather no provider cart", cartGather);

  return (
    <CartContext.Provider
      value={{ cart, cartWed, cartGather, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
