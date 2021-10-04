import BeerListDisplay from "../../components/BeerListDisplay";
import { MainContainerBeerList } from "./style";

const Home = () => {
  return (
    <MainContainerBeerList>
      <BeerListDisplay />
    </MainContainerBeerList>
  );
};

export default Home;
