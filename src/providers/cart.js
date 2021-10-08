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
    let newSorted = [];
    newSorted = array.sort((a, b) => {
      return a.id - b.id;
    });
    let newFiltered = [newSorted[0]];
    let aux = "";
    for (let i = 1; i < newSorted.length; i++) {
      aux = newSorted[i - 1];
      if (aux !== newSorted[i]) {
        newFiltered.push(newSorted[i]);
      }
    }
    return newFiltered;
  };

  let newArrayAuxCart = [];

  const addToCart = (item, radioValue) => {
    if (radioValue === "Graduation") {
      setCart([...cart, item]);
      newArrayAuxCart = [...cart, item];
      // console.log("newArrayAuxCart", newArrayAuxCart);
      //let bool = newArrayAuxCart.some((beer) => beer.id === item.id); //se for true já existe a cerveja lá repetida. Se for false ela não existe.
      //let findElem = newArrayAuxCart.find((beer) => beer.id === item.id);
      //console.log("bool", bool);
      //console.log("find element", findElem);
      if (newArrayAuxCart.length !== 0) {
        setCartFiltered(filteringArray(newArrayAuxCart));
      }
      console.log("new array no add to cart", newArrayAuxCart);
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
    if (type === "cart") {
      const newCart = cart.filter(
        (itemOnCart) => itemOnCart.name !== item.name
      );
      setCart(newCart);
      setCartFiltered(filteringArray(newCart));
      console.log("new cart dentro do remove", newCart);

      setCartVolume(createArrayOfBeerVolume(newCart));
    }
    console.log("cart embaixo do remove", cart);

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

  // if (cart.length !== 0) {
  //   setCartVolume(createArrayOfBeerVolume(cart));
  // }
  // if (cartWed.length !== 0) {
  //   setCartWedVolume(createArrayOfBeerVolume(cartWed));
  // }
  // if (cartGather.length !== 0) {
  //   setCartGatherVolume(createArrayOfBeerVolume(cartGather));
  // }

  console.log("cart de volume no provider", cartVolume);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
