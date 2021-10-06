import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { ButtonStyle } from "./style";

const Button = ({ type, item, radioValue }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const text = type === "catalogue" ? "Add to event" : "Remove from event";

  const handleClick = () => {
    if (type === "catalogue") {
      addToCart(item, radioValue);
    } else {
      removeFromCart(item, type);
    }
  };

  return (
    <>
      {type === "catalogue" && (
        <ButtonStyle onClick={handleClick}>{text}</ButtonStyle>
      )}
      {type !== "catalogue" && (
        <ButtonStyle removeSchema onClick={handleClick}>
          {text}
        </ButtonStyle>
      )}
    </>
  );
};

export default Button;
