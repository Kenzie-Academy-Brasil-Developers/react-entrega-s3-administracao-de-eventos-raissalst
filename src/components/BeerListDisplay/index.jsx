import { useContext } from "react";
import { BeerListContext } from "../../providers/beerList";
import { CartContext } from "../../providers/cart";
import { ListContainerBeerDisplay } from "./style";
import BeerCard from "../BeerCard";

const BeerListDisplay = ({
  type,
  arrayGrad,
  qtityGrad,
  arrayWed,
  qtityWed,
}) => {
  const { beerList } = useContext(BeerListContext);
  const { cart, cartWed, cartGather } = useContext(CartContext);

  return (
    <ListContainerBeerDisplay>
      {!!beerList &&
        type === "catalogue" &&
        beerList.map((beer, index) => (
          <BeerCard key={index} beer={beer} type={type} />
        ))}

      {!!cart &&
        type === "cart" &&
        arrayGrad.map((beer, index) => (
          <BeerCard
            key={index}
            beer={beer}
            type={type}
            qtityGrad={qtityGrad[beer.id]}
          />
        ))}

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
        cartGather.map((beer, index) => (
          <BeerCard key={index} beer={beer} type={type} />
        ))}
    </ListContainerBeerDisplay>
  );
};

export default BeerListDisplay;
