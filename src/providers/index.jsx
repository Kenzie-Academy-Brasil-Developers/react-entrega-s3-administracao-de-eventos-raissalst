import { BeerListProvider } from "./beerList";

const ProvidersGathered = ({ children }) => {
  return <BeerListProvider>{children}</BeerListProvider>;
};

export default ProvidersGathered;
