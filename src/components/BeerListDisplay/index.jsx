import { useContext } from "react";
import { BeerListContext } from "../../providers/beerList";
import { CartContext } from "../../providers/cart";
import { ListContainerBeerDisplay } from "./style";
import BeerCard from "../BeerCard";

const BeerListDisplay = ({ type }) => {
  const { beerList } = useContext(BeerListContext);
  // console.log("beer list no beerListDisplay", beerList);
  const { cart, cartWed, cartGather } = useContext(CartContext);
  // const { cartWed } = useContext(CartContext);
  // const { cartGather } = useContext(CartContext);
  //   console.log("cart no products-list", cart);
  console.log("cart wed no beer display", cartWed);

  return (
    <ListContainerBeerDisplay>
      {!!beerList &&
        type === "catalogue" &&
        beerList.map((beer) => (
          <BeerCard key={beer.id} beer={beer} type={type} />
        ))}

      {!!cart &&
        type === "cart" &&
        cart.map((beer) => <BeerCard key={beer.id} beer={beer} type={type} />)}

      {!!cartWed &&
        type === "cartWed" &&
        cartWed.map((beer) => (
          <BeerCard key={beer.id} beer={beer} type={type} />
        ))}

      {!!cartGather &&
        type === "cartGather" &&
        cartGather.map((beer) => (
          <BeerCard key={beer.id} beer={beer} type={type} />
        ))}
    </ListContainerBeerDisplay>
  );
};

export default BeerListDisplay;
