import { createContext, useState } from "react";
import toast from "react-hot-toast";
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartFiltered, setCartFiltered] = useState([]);
  const [cartWedFiltered, setCartWedFiltered] = useState([]);
  const [cartGatherFiltered, setCartGatherFiltered] = useState([]);

  const notifyAdd = () => toast.success("Produto adicionado com sucesso!");

  const newFilteringArray = (array, item) => {
    let findItemPos = array.findIndex((beer) => beer.id === item.id);

    if (findItemPos === -1) {
      item.quantity = item.quantity + 1;
      array.push(item);
      return array;
    }

    if (findItemPos !== -1) {
      array[findItemPos].quantity = array[findItemPos].quantity + 1;
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
      itemGrad = { ...item };
      newArrayAuxCart = [...cartFiltered];

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

      setCartFiltered(newCart);
    }

    if (type === "cartWed") {
      item.quantity = 0;
      const newCartWed = cartWedFiltered.filter(
        (itemOnCart) => itemOnCart.name !== item.name
      );

      setCartWedFiltered(newCartWed);
    }

    if (type === "cartGather") {
      item.quantity = 0;
      const newCartGather = cartGatherFiltered.filter(
        (itemOnCart) => itemOnCart.name !== item.name
      );

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

  return (
    <CartContext.Provider
      value={{
        cartFiltered,
        cartWedFiltered,
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
