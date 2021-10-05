import BeerListDisplay from "../../components/BeerListDisplay";
import { MainContainerBeerListGather } from "./style";

const Gathering = () => {
  return (
    <MainContainerBeerListGather>
      <BeerListDisplay type="cartGather" />
    </MainContainerBeerListGather>
  );
};

export default Gathering;
