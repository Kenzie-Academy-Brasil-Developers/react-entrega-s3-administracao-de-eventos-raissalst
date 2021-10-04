// import Button from "../button";

import { useContext } from "react";
import { BeerListContext } from "../../providers/beerList";
// import { CartContext } from "../../providers/cart";
import { ListContainerBeerDisplay } from "./style";
import BeerCard from "../BeerCard";

const BeerListDisplay = ({ type }) => {
  // type determinará se nosso componente será do tipo "catalogue" ou "cart"
  // veremos melhor como isso irá funcionar quando formos para nosso App.js
  const { beerList } = useContext(BeerListContext);
  console.log("beer list no beerListDisplay", beerList);
  //   const { cart } = useContext(CartContext);
  //   console.log("cart no products-list", cart);

  return (
    <ListContainerBeerDisplay>
      {/* {type === "catalogue" &&
        catalogue.map((item, index) => (
          <li key={index}>
            {item.name} <Button type={type} item={item} />
          </li>
        ))} */}
      {!!beerList &&
        beerList.map((beer) => <BeerCard key={beer.id} beer={beer} />)}
    </ListContainerBeerDisplay>
  );
};

export default BeerListDisplay;
