import BeerListDisplay from "../../components/BeerListDisplay";
import { MainContainerBeerList } from "./style";

const Home = () => {
  return (
    <MainContainerBeerList>
      <BeerListDisplay type="catalogue" />
    </MainContainerBeerList>
  );
};

export default Home;
