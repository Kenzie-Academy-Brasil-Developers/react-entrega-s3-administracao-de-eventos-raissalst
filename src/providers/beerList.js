import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const BeerListContext = createContext([]);

// criar o provider
export const BeerListProvider = ({ children }) => {
  const [beerList, setBeerList] = useState([]);

  const getBeerList = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => setBeerList(res.data))
      .catch((err) => console.log(err));
  };

  // console.log("beerList no provider beer", beerList);

  useEffect(() => {
    getBeerList();
  }, []);

  // criar a lógica para adicionar
  //   const addToCatalogue = (item) => {
  //     setCatalogue([...catalogue, item]);
  //   };

  // criar a lógica para remover
  //   const removeFromCatalogue = (item) => {
  //     const newCatalogue = catalogue.filter(
  //       (itemOnCatalogue) => itemOnCatalogue.name !== item.name
  //     );
  //     setCatalogue(newCatalogue);
  //   };

  return (
    <BeerListContext.Provider
      value={{ beerList, getBeerList }} //falta colocar as funções de add e remove
    >
      {children}
    </BeerListContext.Provider>
  );
};
