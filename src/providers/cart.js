import { createContext, useState } from "react";
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartWed, setCartWed] = useState([]);
  const [cartGather, setCartGather] = useState([]);

  const [cartFiltered, setCartFiltered] = useState([]);
  // const [cartWedFiltered, setCartWedFiltered] = useState([]);
  // const [cartGatherFiltered, setCartGatherFiltered] = useState([]);

  const [cartVolume, setCartVolume] = useState([]);
  // const [cartWedVolume, setCartWedVolume] = useState([]);
  // const [cartGatherVolume, setCartGatherVolume] = useState([]);

  const createArrayOfBeerVolume = (array) => {
    let auxArray = [];
    array.forEach((item) => {
      if (auxArray[item.id] === undefined) {
        return (auxArray[item.id] = 1);
      } else {
        return (auxArray[item.id] = auxArray[item.id] + 1);
      }
    });
    console.log("aux array no volume", auxArray);
    return auxArray;
  };

  const filteringArray = (array) => {
    // console.log("array na funcao", array);
    let newSorted = [];
    newSorted = array.sort((a, b) => {
      return a.id - b.id;
    });
    // console.log("new sorted", newSorted);
    let newFiltered = [newSorted[0]];
    let aux = "";
    for (let i = 1; i < newSorted.length; i++) {
      aux = newSorted[i - 1];
      if (aux !== newSorted[i]) {
        newFiltered.push(newSorted[i]);
      }
    }
    // console.log("new filtered na funcao", newFiltered);
    return newFiltered[0] ? newFiltered : [];
  };

  let newArrayAuxCart = [];

  const addToCart = (item, radioValue) => {
    // console.log(item);
    if (radioValue === "Graduation") {
      setCart([...cart, item]);
      item.quantity = item.quantity + 1;
      newArrayAuxCart = [...cart, item];
      if (newArrayAuxCart.length !== 0) {
        setCartFiltered(filteringArray(newArrayAuxCart));
      }
      // console.log("new array no add to cart", newArrayAuxCart);
      setCartVolume(createArrayOfBeerVolume(newArrayAuxCart));
    }

    if (radioValue === "Wedding") {
      setCartWed([...cartWed, item]);
    }

    if (radioValue === "Gathering") {
      setCartGather([...cartGather, item]);
    }
  };

  const removeFromCart = (item, type) => {
    // console.log("type no remove", type);
    if (type === "cart") {
      const newCart = cart.filter(
        (itemOnCart) => itemOnCart.name !== item.name
      );
      setCart(newCart);
      setCartFiltered(filteringArray(newCart));
      // console.log("new cart dentro do remove", newCart);

      setCartVolume(createArrayOfBeerVolume(newCart));
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

  //função para adicionar +1 no carrinho

  const addUnitBeerToCart = (item, type) => {
    console.log("type no add +", type);
    if (type === "cart") {
      item.quantity = item.quantity + 1;
      setCartFiltered([...cartFiltered]);
    }
  };

  //função para diminuir itens no carrinho
  const subtractFromBeerCart = (item, type) => {
    console.log("type no remove", type);
    if (type === "cart") {
      item.quantity = item.quantity - 1;
      if (item.quantity === 0) {
        removeFromCart(item, type);
      } else {
        setCartFiltered([...cartFiltered]);
      }
    }
  };
  // console.log("cart de volume no provider", cartVolume);
  // console.log("cart sem filtro no provider", cart);
  // console.log("cart com filtro no provider", cartFiltered);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartFiltered,
        cartVolume,
        cartWed,
        cartGather,
        addToCart,
        removeFromCart,
        subtractFromBeerCart,
        addUnitBeerToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
