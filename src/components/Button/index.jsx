import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { ButtonStyle } from "./style";

const Button = ({ type, item, radioValue, typeSumSub }) => {
  const {
    addToCart,
    removeFromCart,
    subtractFromBeerCart,
    addUnitBeerToCart,
    notifyAdd,
  } = useContext(CartContext);

  const text = type === "catalogue" ? "Add to event" : "Remove from event";

  const handleClick = () => {
    if (type === "catalogue") {
      addToCart(item, radioValue);
      if (radioValue !== "") {
        notifyAdd();
      }
    } else if (type !== "catalogue" && typeSumSub === "add") {
      addUnitBeerToCart(item, type);
    } else if (type !== "catalogue" && typeSumSub === "sub") {
      subtractFromBeerCart(item, type);
    } else {
      removeFromCart(item, type);
    }
  };

  return (
    <>
      {type === "catalogue" && (
        <ButtonStyle onClick={handleClick}>{text}</ButtonStyle>
      )}
      {type !== "catalogue" && typeSumSub !== "add" && typeSumSub !== "sub" && (
        <ButtonStyle removeSchema onClick={handleClick}>
          {text}
        </ButtonStyle>
      )}
      {typeSumSub === "add" && type !== "catalogue" && (
        <ButtonStyle onClick={handleClick}>+</ButtonStyle>
      )}
      {typeSumSub === "sub" && type !== "catalogue" && (
        <ButtonStyle onClick={handleClick}>-</ButtonStyle>
      )}
    </>
  );
};

export default Button;
