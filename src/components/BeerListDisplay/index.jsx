import { useContext } from "react";
import { BeerListContext } from "../../providers/beerList";
import { CartContext } from "../../providers/cart";
import { ListContainerBeerDisplay } from "./style";
import BeerCard from "../BeerCard";

const BeerListDisplay = ({ type }) => {
  const { beerList } = useContext(BeerListContext);
  console.log("beer list no beerListDisplay", beerList);
  const { cart } = useContext(CartContext);
  //   console.log("cart no products-list", cart);

  return (
    <ListContainerBeerDisplay>
      {!!beerList &&
        type === "catalogue" &&
        beerList.map((beer) => (
          <BeerCard key={beer.id} beer={beer} type={type} />
        ))}

      {!!beerList &&
        type === "cart" &&
        cart.map((beer) => <BeerCard key={beer.id} beer={beer} type={type} />)}
    </ListContainerBeerDisplay>
  );
};

export default BeerListDisplay;
