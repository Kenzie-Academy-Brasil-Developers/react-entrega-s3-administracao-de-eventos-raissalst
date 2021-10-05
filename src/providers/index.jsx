import { BeerListProvider } from "./beerList";
import { CartProvider } from "./cart";

const ProvidersGathered = ({ children }) => {
  return (
    <BeerListProvider>
      <CartProvider>{children}</CartProvider>
    </BeerListProvider>
  );
};

export default ProvidersGathered;
