import { useContext } from "react";
import { CartContext } from "../../providers/cart";
// import { BeerListContext } from "../../providers/beerList";
import { ButtonStyle } from "./style";

const Button = ({ type, item, removeSchema }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  //   const { beerList } = useContext(BeerListContext); //lista de cervejas que vem da API recebida aqui

  const text = type === "catalogue" ? "Add to event" : "Remove from event";

  const handleClick = () => {
    if (type === "catalogue") {
      addToCart(item);
    } else {
      removeFromCart(item);
    }
  };

  return (
    <>
      {type === "catalogue" && (
        <ButtonStyle onClick={handleClick}>{text}</ButtonStyle>
      )}
      {type === "cart" && (
        <ButtonStyle removeSchema onClick={handleClick}>
          {text}
        </ButtonStyle>
      )}
    </>
  );
};

export default Button;
