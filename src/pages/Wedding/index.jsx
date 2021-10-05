import BeerListDisplay from "../../components/BeerListDisplay";
import { MainContainerBeerListWed } from "./style";

const Wedding = () => {
  return (
    <MainContainerBeerListWed>
      <BeerListDisplay type="cartWed" />
    </MainContainerBeerListWed>
  );
};

export default Wedding;
