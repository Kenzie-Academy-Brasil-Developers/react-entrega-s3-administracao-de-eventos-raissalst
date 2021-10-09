import { createContext, useState } from "react";
import toast from "react-hot-toast";
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);
  // const [cartWed, setCartWed] = useState([]);
  // const [cartGather, setCartGather] = useState([]);
  const [cartFiltered, setCartFiltered] = useState([]);
  const [cartWedFiltered, setCartWedFiltered] = useState([]);
  const [cartGatherFiltered, setCartGatherFiltered] = useState([]);

  const notifyAdd = () => toast.success("Produto adicionado com sucesso!");

  const newFilteringArray = (array, item) => {
    let findItemPos = array.findIndex((beer) => beer.id === item.id);

    if (findItemPos === -1) {
      item.quantity = item.quantity + 1;
      array.push(item);
      console.log(array);
      return array;
    }

    if (findItemPos !== -1) {
      console.log(array[findItemPos].quantity);
      array[findItemPos].quantity = array[findItemPos].quantity + 1;
      console.log(array[findItemPos].quantity);
      console.log(array);
      return array;
    }
  };

  let newArrayAuxCart = [];
  let newArrayAuxCartWed = [];
  let newArrayAuxCartGather = [];
  let itemGrad = "";
  let itemWed = "";
  let itemGather = "";

  const addToCart = (item, radioValue) => {
    if (radioValue === "Graduation") {
      itemGrad = { ...item }; //copiei o item
      newArrayAuxCart = [...cartFiltered]; //copiei o state filtrado
      //se o array estiver totalmente vazio
      if (newArrayAuxCart.length === 0) {
        itemGrad.quantity = itemGrad.quantity + 1;
        return setCartFiltered([...cartFiltered, itemGrad]);
      }
      return setCartFiltered(newFilteringArray(newArrayAuxCart, itemGrad));
    }

    if (radioValue === "Wedding") {
      itemWed = { ...item };
      newArrayAuxCartWed = [...cartWedFiltered];

      if (cartWedFiltered.length === 0) {
        itemWed.quantity = itemWed.quantity + 1;
        return setCartWedFiltered([...cartWedFiltered, itemWed]);
      }
      return setCartWedFiltered(newFilteringArray(newArrayAuxCartWed, itemWed));
    }

    if (radioValue === "Gathering") {
      itemGather = { ...item };
      newArrayAuxCartGather = [...cartGatherFiltered];

      if (cartGatherFiltered.length === 0) {
        itemGather.quantity = itemGather.quantity + 1;
        return setCartGatherFiltered([...cartGatherFiltered, itemGather]);
      }
      return setCartGatherFiltered(
        newFilteringArray(newArrayAuxCartGather, itemGather)
      );
    }
  };

  const removeFromCart = (item, type) => {
    if (type === "cart") {
      item.quantity = 0;
      const newCart = cartFiltered.filter(
        (itemOnCart) => itemOnCart.name !== item.name
      );
      // setCart(newCart);
      console.log("new cart", newCart);
      setCartFiltered(newCart);
    }

    if (type === "cartWed") {
      item.quantity = 0;
      const newCartWed = cartWedFiltered.filter(
        (itemOnCart) => itemOnCart.name !== item.name
      );
      // setCartWed(newCartWed);
      setCartWedFiltered(newCartWed);
    }

    if (type === "cartGather") {
      item.quantity = 0;
      const newCartGather = cartGatherFiltered.filter(
        (itemOnCart) => itemOnCart.name !== item.name
      );
      // setCartGather(newCartGather);
      setCartGatherFiltered(newCartGather);
    }
  };

  //função para adicionar +1 no carrinho
  const addUnitBeerToCart = (item, type) => {
    if (type === "cart") {
      item.quantity = item.quantity + 1;
      setCartFiltered([...cartFiltered]);
    }

    if (type === "cartWed") {
      item.quantity = item.quantity + 1;
      setCartWedFiltered([...cartWedFiltered]);
    }

    if (type === "cartGather") {
      item.quantity = item.quantity + 1;
      setCartGatherFiltered([...cartGatherFiltered]);
    }
  };

  //função para subtrair -1 no carrinho
  const subtractFromBeerCart = (item, type) => {
    console.log(type);
    // console.log(item);
    if (type === "cart") {
      item.quantity = item.quantity - 1;
      if (item.quantity === 0) {
        removeFromCart(item, type);
      } else {
        setCartFiltered([...cartFiltered]);
      }
    }

    if (type === "cartWed") {
      item.quantity = item.quantity - 1;
      if (item.quantity === 0) {
        removeFromCart(item, type);
      } else {
        setCartWedFiltered([...cartWedFiltered]);
      }
    }

    if (type === "cartGather") {
      item.quantity = item.quantity - 1;
      if (item.quantity === 0) {
        removeFromCart(item, type);
      } else {
        setCartGatherFiltered([...cartGatherFiltered]);
      }
    }
  };
  // console.log("cart de volume no provider", cartVolume);
  // console.log("cart sem filtro no provider", cart);
  console.log("cart com filtro no provider", cartFiltered);

  return (
    <CartContext.Provider
      value={{
        // cart,
        cartFiltered,
        // cartWed,
        cartWedFiltered,
        // cartGather,
        cartGatherFiltered,
        addToCart,
        removeFromCart,
        subtractFromBeerCart,
        addUnitBeerToCart,
        notifyAdd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
