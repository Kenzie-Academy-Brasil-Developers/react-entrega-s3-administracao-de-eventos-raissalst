import { useContext } from "react";
import { BeerListContext } from "../../providers/beerList";
import { CartContext } from "../../providers/cart";
import { ListContainerBeerDisplay } from "./style";
import BeerCard from "../BeerCard";

const BeerListDisplay = ({ type }) => {
  const { beerList } = useContext(BeerListContext);
  const { cartFiltered, cartWedFiltered, cartGatherFiltered } =
    useContext(CartContext);

  return (
    <ListContainerBeerDisplay>
      {!!beerList &&
        type === "catalogue" &&
        beerList.map((beer, index) => (
          <BeerCard key={index} beer={beer} type={type} />
        ))}

      {!!cartFiltered &&
        type === "cart" &&
        cartFiltered.map((beer) => (
          <BeerCard key={beer.id} beer={beer} type={type} />
        ))}

      {!!cartWedFiltered &&
        type === "cartWed" &&
        cartWedFiltered.map((beer) => (
          <BeerCard key={beer.id} beer={beer} type={type} />
        ))}

      {!!cartGatherFiltered &&
        type === "cartGather" &&
        cartGatherFiltered.map((beer) => (
          <BeerCard key={beer.id} beer={beer} type={type} />
        ))}
    </ListContainerBeerDisplay>
  );
};

export default BeerListDisplay;
