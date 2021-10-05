import BeerListDisplay from "../../components/BeerListDisplay";
import { MainContainerBeerListGrad } from "./style";

const Graduation = () => {
  return (
    <MainContainerBeerListGrad>
      <BeerListDisplay type="cart" />
    </MainContainerBeerListGrad>
  );
};

export default Graduation;
