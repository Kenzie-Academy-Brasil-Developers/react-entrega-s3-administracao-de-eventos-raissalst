import { useContext } from "react";
import { BeerListContext } from "../../providers/beerList";
import { CartContext } from "../../providers/cart";
import { ListContainerBeerDisplay } from "./style";
import BeerCard from "../BeerCard";

const BeerListDisplay = ({
  type,
  arrayWed,
  qtityWed,
  arrayGather,
  qtityGather,
}) => {
  const { beerList } = useContext(BeerListContext);
  const { cartFiltered, cartWed, cartGather } = useContext(CartContext);
  // console.log("cart filtered", cartFiltered);

  return (
    <ListContainerBeerDisplay>
      {!!beerList &&
        type === "catalogue" &&
        beerList.map((beer, index) => (
          <BeerCard key={index} beer={beer} type={type} />
        ))}

      {
        /*!!cart &&*/
        !!cartFiltered &&
          type === "cart" &&
          cartFiltered.map((beer) => (
            <BeerCard key={beer.id} beer={beer} type={type} />
          ))
      }

      {!!cartWed &&
        type === "cartWed" &&
        arrayWed.map((beer, index) => (
          <BeerCard
            key={index}
            beer={beer}
            type={type}
            qtityWed={qtityWed[beer.id]}
          />
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
