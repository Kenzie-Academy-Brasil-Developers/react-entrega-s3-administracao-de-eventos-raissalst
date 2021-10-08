import { useContext } from "react";
import { BeerListContext } from "../../providers/beerList";
import { CartContext } from "../../providers/cart";
import { ListContainerBeerDisplay } from "./style";
import BeerCard from "../BeerCard";

const BeerListDisplay = ({ type, arrayGather, qtityGather }) => {
  const { beerList } = useContext(BeerListContext);
  const { cartFiltered, cartWedFiltered, cartGather } = useContext(CartContext);
  // console.log("cart filtered", cartFiltered);

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

      {!!cartGather &&
        type === "cartGather" &&
        arrayGather.map((beer, index) => (
          <BeerCard
            key={index}
            beer={beer}
            type={type}
            qtityGather={qtityGather[beer.id]}
          />
        ))}
    </ListContainerBeerDisplay>
  );
};

export default BeerListDisplay;
